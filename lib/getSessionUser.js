import { authOptions } from './authOptions';
import { getServerSession } from 'next-auth';

export default async function getSessionUser() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      throw new Error('No session found');
    }
    return {
      user: session.user,
      userID: session.user.id,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
