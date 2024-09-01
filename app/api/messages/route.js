import getSessionUser from '@/lib/getSessionUser';
import Message from '@/models/Message';
import connectDB from '@/config/connectDB';
export const dynamic = 'force-dynamic';

// GET /api/messages
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

    // Retrieve all read messages
    const readMessages = await Message.find({ recipient: userID, read: true })
      .sort({ createdAt: -1 })
      .populate('sender', 'username image email')
      .populate('property', 'name');

    // Retrieve all unread messages
    const unReadMessages = await Message.find({
      recipient: userID,
      read: false,
    })
      .sort({ createdAt: -1 })
      .populate('sender', 'username image email')
      .populate('property', 'name');

    // Combine read and unread messages into a single array
    const messages = [...unReadMessages, ...readMessages];

    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

// POST /api/messages
export const POST = async (request) => {
  try {
    await connectDB();

    const { name, email, phone, message, recipient, property } =
      await request.json();

    const session = await getSessionUser();

    if (!session || !session.user) {
      return new Response(
        JSON.stringify({ message: 'Sign in to send a message' }),
        {
          status: 401,
        }
      );
    }

    const { userID } = session;

    // Ensure you cannot send the message to yourself
    if (recipient === userID) {
      return new Response(
        JSON.stringify({ message: 'You cannot send a message to yourself' }),
        { status: 400 }
      );
    }

    const messageData = {
      sender: userID,
      recipient,
      property,
      name,
      email,
      phone,
      body: message,
    };

    await Message.create(messageData);

    return new Response(JSON.stringify({ message: 'Message sent' }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
