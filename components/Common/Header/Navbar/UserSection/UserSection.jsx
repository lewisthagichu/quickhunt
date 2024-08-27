'use client';
import { useSession } from 'next-auth/react';
import SignedIn from './SignedIn/SignedIn';
import SignedOut from './SignedOut/SignedOut';

function UserSection() {
  const { data: session } = useSession();

  return session ? <SignedIn /> : <SignedOut />;
}

export default UserSection;
