'use client';
import styles from './signedOut.module.scss';
import useCallbackUrl from '@/hooks/useCallbackUrl';
import Link from 'next/link';
import { Suspense } from 'react';

export default function SignedOut() {
  const callbackUrl = useCallbackUrl();
  return (
    <Suspense>
      <div className={styles.signedOut}>
        <Link
          className={`btn ${styles.login}`}
          href={`/signin?callbackUrl=${callbackUrl}`}
        >
          Login
        </Link>
        <Link
          className={`btn ${styles.signUp}`}
          href={`/signup?callbackUrl=${callbackUrl}`}
        >
          Sign up
        </Link>
      </div>
    </Suspense>
  );
}
