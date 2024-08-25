import Image from 'next/image';
import styles from './logo.module.scss';
import Link from 'next/link';
import logo from '@/public/images/logoHeader.png';

function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <div className={styles.imageContainer}>
          <Image src={logo} fill alt="logo" />
        </div>
      </Link>
    </div>
  );
}

export default Logo;
