import styles from './AboutHero.module.scss';
import Image from 'next/image';
import heroImg from '@/public/images/hero.webp';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={heroImg} sizes="50vw" fill alt="image" placeholder="blur" />
      </div>

      <div className={styles.clipBack}></div>
      <div className={styles.clipMiddle}></div>
      <div className={styles.clipTop}>
        <div className={styles.textContainer}>
          <div className={styles.top}>
            <h2>About us</h2>
            <h3>
              <span>Rent with Ease.</span>
              <span> List with Trust.</span>
            </h3>
          </div>

          <p>
            At BomaBora Properties, we aim to simplify the rental process by
            bridging the gap between property owners and potential tenants. We
            believe that finding a home or renting a property should be easy,
            transparent, and stress-free.
          </p>

          <div className={styles.btns}>
            <Link href="/properties" className={`btn ${styles.btn}`}>
              Explore listings
            </Link>
            <Link href="/contact" className={`btn ${styles.btn}`}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
