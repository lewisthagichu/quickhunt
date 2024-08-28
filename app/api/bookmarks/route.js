import User from '@/models/User';
import Property from '@/models/Property';
import connectDB from '@/config/connectDB';
import getSessionUser from '@/lib/getSessionUser';

export const dynamic = 'force-dynamic';

// GET /api/bookmarks
export const GET = async (request) => {
  try {
    await connectDB();

    const session = await getSessionUser();

    if (!session || !session.user) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    const { userID } = session;

    // Retrieve the user from the database
    const user = await User.findById(userID);

    // Access the bookmarks
    const bookmarks = user.bookmarks;

    // Find bookmarked properties
    const bookmarkedProperties = await Property.find({
      _id: { $in: bookmarks },
    });

    return new Response(JSON.stringify({ bookmarkedProperties }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

// POST /api/bookmarks
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

    if (!propertyID) {
      return new Response('Proprty ID is required', {
        status: 401,
      });
    }

    const { userID } = session;

    // Find rhe user in database
    const user = await User.findById(userID);

    // Check if the property is already bookmarked
    let isBookmarked = user.bookmarks.includes(propertyID);

    let message;

    // Remove bookmark if it exists and vice versa
    if (isBookmarked) {
      user.bookmarks.pull(propertyID);
      message = 'Bookmark removed successfully';
      isBookmarked = false;
    } else {
      user.bookmarks.push(propertyID);
      message = 'Bookmark added successfully';
      isBookmarked = true;
    }

    // Save the chnages in user.bookmarks prop
    await user.save();

    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
