import Image from 'next/image';
import styles from './hero.module.scss';
// import heroImg from '@/public/images/hero.webp';
import heroImg2 from '@/public/images/hero2.webp';
import { inter } from '@/public/font/font';

function Hero() {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image src={heroImg2} fill alt="image" placeholder="blur" />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h3>
          Making <span>Renting</span> Effortless
        </h3>

        <p>Explore, discover and move in.</p>
      </div>
    </div>
  );
}

export default Hero;
