import Link from 'next/link';
import styles from './mastHead.module.scss';
import { inter } from '@/public/font/font';

function MastHead() {
  return (
    <section className={`${styles.container} ${inter.className}`}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <span>L</span>
        </div>
        <div className={styles.content}>
          <h1>Lewis</h1>
          <p>Member since Aug 2024</p>
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

export default MastHead;
