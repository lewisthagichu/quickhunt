import connectDB from '@/config/connectDB';
import Property from '@/models/Property';

// GET /api/properties/recent
export const GET = async (request) => {
  try {
    await connectDB();

    // Aggregation pipeline to match properties and select 3 randomly
    const properties = await Property.aggregate([
      { $match: { is_popular: false } },
      { $sample: { size: 3 } },
    ]);

    return new Response(JSON.stringify({ properties }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response('Something went wrong fetching recent properties', {
      status: 500,
    });
  }
};
