'use client';
import styles from './login.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logoHeader.png';
import GoogleSignInError from '../SignUp/GoogleErrorMessage';
import { inter } from '@/public/font/font';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export default function Login() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  return (
    <section className={`${styles.container} ${inter.className}`}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image src={logo} fill alt="logo" />
        </div>
        <h1>Login to QuickHunt</h1>
        <div className={styles.content}>
          <div className={styles.description}>
            QuickHunt simplifies the rental process by bringing together tenants
            and property owners in one easy-to-use platform.
          </div>

          <form className={styles.form} action="">
            <div className={styles.row}>
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                // placeholder="••••••••••"
              />
            </div>
            <a href="#">Forgot Password?</a>
            <button type="submit">Login</button>
          </form>

          <button
            onClick={() => signIn('google', { callbackUrl })}
            className={styles.googleBtn}
          >
            <FcGoogle />
            <span>Login with Google</span>
          </button>

          <div className={styles.link}>
            Don't have an account?{' '}
            <span>
              <Link href="/signup">Sign up</Link>
            </span>
          </div>

          <div className={styles.error}>
            <GoogleSignInError />
          </div>
        </div>
      </div>
    </section>
  );
}
