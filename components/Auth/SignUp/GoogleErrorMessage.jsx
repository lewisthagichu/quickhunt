'use client';
import { useSearchParams } from 'next/navigation';

export default function GoogleSignInError() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  if (!error) return null;
  return <p>Something went wrong! {error}</p>;
}
