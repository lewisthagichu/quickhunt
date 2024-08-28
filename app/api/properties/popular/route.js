import connectDB from '@/config/connectDB';
import Property from '@/models/Property';

// GET /api/properties/popular
export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find({
      is_popular: true,
    });

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong fetch popular properties', {
      status: 500,
    });
  }
};
