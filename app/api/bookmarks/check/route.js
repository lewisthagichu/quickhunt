import User from '@/models/User';
import connectDB from '@/config/connectDB';
import getSessionUser from '@/lib/getSessionUser';

export const dynamic = 'force-dynamic';

// POST /api/bookmarks/check
export const POST = async (request) => {
  try {
    await connectDB();

    const { propertyID } = await request.json();

    const session = await getSessionUser();

    if (!session || !session.user) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    const { userID } = session;

    // Find rhe user in database
    const user = await User.findById(userID);

    // Check if the property is already bookmarked
    let isBookmarked = user.bookmarks.includes(propertyID);

    return new Response(JSON.stringify({ isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
