import getSessionUser from '@/lib/getSessionUser';
import Message from '@/models/Message';
import connectDB from '@/config/connectDB';

export const dynamic = 'force-dynamic';

// PUT /api/messages/:id
export const PUT = async (request, { params }) => {
  try {
    await connectDB();

    const session = await getSessionUser();

    if (!session || !session.user) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    const { userID } = session;

    const messageID = params.id;

    const message = await Message.findById(messageID);

    if (!message) return new Response('Message Not Found', { status: 404 });

    // Verify ownership
    if (message.recipient.toString() !== userID) {
      return new Response('Unauthorized', { status: 401 });
    }

    // Update message to read
    message.read = true;
    await message.save();

    return new Response('Successfully read message', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

// DELETE /api/messages/:id
export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    const session = await getSessionUser();

    if (!session || !session.user) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    const { userID } = session;

    const messageID = params.id;

    const message = await Message.findById(messageID);

    if (!message) return new Response('Message Not Found', { status: 404 });

    // Verify ownership
    if (message.recipient.toString() !== userID) {
      return new Response('Unauthorized', { status: 401 });
    }

    // Delete message
    await message.deleteOne();

    return new Response('Message deleted', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
