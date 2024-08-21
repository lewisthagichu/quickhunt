import styles from './Values.module.scss';
import { BsPatchCheck } from 'react-icons/bs';
import { IoAccessibilityOutline } from 'react-icons/io5';
import { FaRegHandshake } from 'react-icons/fa';

export default function Values() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.headline}>Our Values</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <BsPatchCheck />
            </div>
            <div className={styles.content}>
              <h3>Transparency</h3>
              <p>
                We believe in fostering clear and honest communication between
                tenants and property owners. Our platform ensures that all
                interactions are straightforward, providing accurate information
                and setting the right expectations.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <IoAccessibilityOutline />
            </div>
            <div className={styles.content}>
              <h3>Accessibility</h3>
              <p>
                Our platform is designed to be easy to use and accessible to
                everyone, regardless of technical expertise. Whether you’re
                browsing on a computer or mobile device, we ensure that every
                feature is intuitive and straightforward, so you can find or
                list properties with ease.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FaRegHandshake />
            </div>
            <div className={styles.content}>
              <h3>Community</h3>
              <p>
                We’re committed to fostering a sense of belonging by connecting
                people with the spaces they’ll cherish. We believe that finding
                a home is about building lasting relationships and creating
                neighborhoods where everyone feels welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
