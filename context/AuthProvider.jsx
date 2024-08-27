'use client';
import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({ children, context }) {
  return <SessionProvider context={context}>{children}</SessionProvider>;
}
