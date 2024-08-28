import connectDB from '@/config/connectDB';
import getSessionUser from '@/lib/getSessionUser';
import Property from '@/models/Property';

// GET /api/properties/user/:userId
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const userID = params.userID;
    const session = await getSessionUser();

    if (!userID || userID !== session.userID) {
      return new Response('User ID is required', { status: 400 });
    }

    const properties = await Property.find({ owner: userID });

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('error: ' + error.message, { status: 404 });
  }
};
