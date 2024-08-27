'use client';
import { useState } from 'react';
import SignedIn from './SignedIn/SignedIn';
import SignedOut from './SignedOut/SignedOut';

function UserSection() {
  const [session, setSession] = useState(false);

  return session ? <SignedIn /> : <SignedOut />;
}

export default UserSection;
