import styles from './hero.module.scss';
import Image from 'next/image';
import heroImg from '@/public/images/hero2.webp';
import PropertySearchForm from '../../Common/PropertySearchForm/PropertySearchForm';

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image src={heroImg} fill alt="image" placeholder="blur" />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h3>
          Making <span>Renting</span> Effortless
        </h3>

        <p>Explore, discover and move in.</p>
      </div>
      <PropertySearchForm />
    </section>
  );
}

export default Hero;
``;
