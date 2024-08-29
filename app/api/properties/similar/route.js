import connectDB from '@/config/connectDB';
import Property from '@/models/Property';

// POST /api/properties/similar
export const POST = async (request) => {
  try {
    await connectDB();
    const { propertyID } = await request.json();

    if (!propertyID) {
      return new Response('Property ID is required', { status: 400 });
    }

    // Check if the current property exists
    const currentProperty = await Property.findById(propertyID);

    if (!currentProperty) {
      return new Response('Current property does not exist.', { status: 404 });
    }

    // Extract location and type from the current property
    const { location, type } = currentProperty;

    // Build the query for similar properties
    const locationPattern = new RegExp(location, 'i');
    let similarQuery = {
      _id: { $ne: propertyID }, // Exclude the current property
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { 'location.street': locationPattern },
        { 'location.town': locationPattern },
        { 'location.county': locationPattern },
        { 'location.zipcode': locationPattern },
        { type }, // Match the exact type
      ],
    };

    // Get similar properties
    let similarProperties = await Property.find(similarQuery);

    // If fewer than 4 properties are found, supplement with random properties
    if (similarProperties.length < 4) {
      // Collect IDs of the properties already found
      const excludeIds = [propertyID, ...similarProperties.map((p) => p._id)];

      const additionalProperties = await Property.aggregate([
        { $match: { _id: { $nin: excludeIds } } },
        { $sample: { size: 4 - similarProperties.length } },
      ]);

      similarProperties = similarProperties.concat(additionalProperties);
    }

    return new Response(JSON.stringify({ similarProperties }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
