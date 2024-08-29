import connectDB from '@/config/connectDB';
import Property from '@/models/Property';

// GET /api/properties/search
export const GET = async (request) => {
  try {
    await connectDB();

    // Get the search parameters
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const pageSize = searchParams.get('pageSize');
    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');
    const budget = parseFloat(searchParams.get('budget'));

    //Return empty array if budget is 0
    if (budget === 0) {
      return new Response(JSON.stringify({ properties: [], total: 0 }), {
        status: 200,
      });
    }

    // Match the location search parameter in a case-insensitive manner.
    const locationPattern = new RegExp(location, 'i');

    // Build the query object
    let query = {
      $and: [
        {
          $or: [
            { name: locationPattern },
            { description: locationPattern },
            { 'location.street': locationPattern },
            { 'location.town': locationPattern },
            { 'location.county': locationPattern },
            { 'location.zipcode': locationPattern },
          ],
        },
      ],
    };

    // Add property type to the query if it exists
    if (propertyType && propertyType !== 'All') {
      const propertyTypePattern = new RegExp(propertyType, 'i');
      query.$and.push({ type: propertyTypePattern });
    }

    // Add budget filtering if a budget is provided
    if (budget && budget > 0) {
      query.$and.push({
        $expr: {
          $lte: [
            {
              $max: [
                { $ifNull: ['$rates.weekly', 0] },
                { $ifNull: ['$rates.monthly', 0] },
                { $ifNull: ['$rates.nightly', 0] },
              ],
            },
            budget,
          ],
        },
      });
    }

    // Determine number of properties to skip
    const skip = (page - 1) * pageSize;

    // Get all properties that match the search query
    const total = await Property.countDocuments(query);

    // Retrieve properties to retrieve in current page
    const properties = await Property.find(query).skip(skip).limit(pageSize);

    return new Response(JSON.stringify({ properties, total }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
