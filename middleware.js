import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/signin',
    signIn: '/signup',
  },
});

export const config = {
  matcher: [
    '/properties/add',
    '/profile',
    '/profile/listings',
    '/profile/bookmarks',
    '/messages',
  ],
};
