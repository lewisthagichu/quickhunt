'use client';
import styles from './signedOut.module.scss';
import { signIn } from 'next-auth/react';

export default function SignedOut() {
  //   const { data: session, status, update } = useSession();
  return (
    <div className={styles.signedOut}>
      <button type="button" className={`btn ${styles.login}`}>
        Login
      </button>
      <button
        type="button"
        className={`btn ${styles.signUp}`}
        onClick={() => signIn()}
      >
        Sign up
      </button>
    </div>
  );
}
