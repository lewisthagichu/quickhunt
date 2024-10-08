import connectDB from '@/config/connectDB';
import cloudinary from '@/config/cloudinary';
import Property from '@/models/Property';
import getSessionUser from '@/lib/getSessionUser';

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    const page = request.nextUrl.searchParams.get('page') || 1;
    const pageSize = request.nextUrl.searchParams.get('pageSize') || 6;

    // Determine number of properties to skip
    const skip = (page - 1) * pageSize;

    // Retrieve total number of properties in database
    const total = await Property.countDocuments({});

    // Retrieve properties to retrieve in current page
    const properties = await Property.find({}).skip(skip).limit(pageSize);

    return new Response(JSON.stringify({ properties, total }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('error: ' + error.message, { status: 404 });
  }
};

// POST /api/properties
export const POST = async (request) => {
  try {
    await connectDB();
    const session = await getSessionUser();

    if (!session || !session.user) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    const { userID } = session;

    const formData = await request.formData();

    // Access all values from amenities and images
    const amenities = formData.getAll('amenities');
    const images = formData.getAll('images').filter((image) => image !== '');

    // Create property object for database
    const propertyData = {
      type: formData.get('type'),
      name: formData.get('name'),
      description: formData.get('description'),
      location: {
        street: formData.get('location.street'),
        town: formData.get('location.town'),
        county: formData.get('location.county'),
        postalcode: formData.get('location.postalcode'),
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

    // Upload image(s) to Cloudinary
    const imageUploadPromises = [];

    for (const image of images) {
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      // Convert the image data to base64
      const imageBase64 = imageData.toString('base64');

      // Make request to upload to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: 'quickhunt',
        }
      );

      imageUploadPromises.push(result.secure_url);

      // Wait for all images to upload
      const uploadedImages = await Promise.all(imageUploadPromises);
      // Add uploaded images to the propertyData object
      propertyData.images = uploadedImages;
    }

    const newProperty = await Property.create(propertyData);

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
    );

    // return new Response('successful', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('error: ' + error.message, { status: 500 });
  }
};
