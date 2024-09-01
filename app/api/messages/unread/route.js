import getSessionUser from '@/lib/getSessionUser';
import Message from '@/models/Message';
import connectDB from '@/config/connectDB';

export const dynamic = 'force-dynamic';

// GET /api/messages/unread
export const GET = async () => {
  try {
    await connectDB();

    const session = await getSessionUser();

    if (!session || !session.user) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    const { userID } = session;

    // Retrieve count of all unread messages
    const count = await Message.countDocuments({
      recipient: userID,
      read: false,
    });

    return new Response(JSON.stringify(count), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
