'use client';
import styles from './mastHead.module.scss';
import { inter } from '@/public/font/font';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import profileDefault from '@/public/images/profile.png';

export default function MastHead() {
  const { data: session } = useSession();
  const { name, image, createdAt } = session?.user;
  const date = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  useEffect(() => {}, [session]);

  return (
    <section className={`${styles.container} ${inter.className}`}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <Image
            src={image || profileDefault}
            fill
            sizes="50vw"
            alt="profile photo"
          />
        </div>
        <div className={styles.content}>
          <h1>{name}</h1>
          <p>Member since {date}</p>
        </div>
      </div>

      <nav className={styles.subnav}>
        <ul>
          <li>
            <Link className={styles.active} href="/profile/listings">
              Listings
            </Link>
          </li>
          <li>
            <Link href="/profile/bookmarks">
              <span>Bookmarks</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
