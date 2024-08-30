import connectDB from '@/config/connectDB';
import Property from '@/models/Property';
import getSessionUser from '@/lib/getSessionUser';

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) return new Response('Property Not Found', { status: 404 });

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something Went Wrong', { status: 500 });
  }
};

// PUT /api/properties/:id
export const PUT = async (request, { params }) => {
  try {
    await connectDB();
    const session = await getSessionUser();

    if (!session || !session.user) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    // Retrieve property ID and user ID
    const propertyID = params.id;
    const { userID } = session;

    // Get property that will be updated
    const property = await Property.findById(propertyID);

    if (!property) return new Response('Property not found', { status: 404 });

    // Check if property belongs to session user
    if (property.owner.toString() !== userID) {
      return new Response('Unauthorized', { status: 401 });
    }

    const formData = await request.formData();

    // Access all values from amenities and images
    const amenities = formData.getAll('amenities');

    // Create property object for database
    const propertyData = {
      type: formData.get('type'),
      name: formData.get('name'),
      description: formData.get('description'),
      location: {
        street: formData.get('location.street'),
        town: formData.get('location.town'),
        county: formData.get('location.county'),
        zipcode: formData.get('location.zipcode'),
      },
      beds: formData.get('beds'),
      baths: formData.get('baths'),
      square_feet: formData.get('square_feet'),
      amenities,
      rates: {
        nightly: formData.get('rates.nightly'),
        weekly: formData.get('rates.weekly'),
        monthly: formData.get('rates.monthly'),
      },
      seller_info: {
        name: formData.get('seller_info.name'),
        email: formData.get('seller_info.email'),
        phone: formData.get('seller_info.phone'),
      },
      owner: userID,
    };

    // Update property in database
    const updatedProperty = await Property.findByIdAndUpdate(
      propertyID,
      propertyData
    );

    return new Response(JSON.stringify(updatedProperty), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('error: ' + error.message, { status: 500 });
  }
};

// DELETE /api/properties/:id
export const DELETE = async (request, { params }) => {
  try {
    const propertyID = params.id;

    const session = await getSessionUser();

    // Check for session
    if (!session || !session.userID) {
      return new Response('User ID is required', { status: 401 });
    }

    const { userID } = session;

    await connectDB();

    const property = await Property.findById(propertyID);

    if (!property) return new Response('Property Not Found', { status: 404 });

    // Verify ownership
    if (property.owner.toString() !== userID) {
      return new Response('Unauthorized', { status: 401 });
    }

    await property.deleteOne();

    return new Response('Property Deleted', {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something Went Wrong', { status: 500 });
  }
};
