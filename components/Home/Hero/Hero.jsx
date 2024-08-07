import Image from 'next/image';
import styles from './hero.module.scss';
import heroImg from '@/public/images/hero.webp';
import heroImg2 from '@/public/images/hero2.webp';

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={heroImg2} fill alt="image" placeholder="blur" />
      </div>
    </div>
  );
}

export default Hero;
