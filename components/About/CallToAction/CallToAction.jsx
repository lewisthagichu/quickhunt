import Link from 'next/link';
import styles from './CallToAction.module.scss';
import { FaArrowRight } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <section className={styles.container}>
      <div className={styles.join}>
        <Link className={`btn ${styles.joinBtn}`} href="#">
          Get Started
          <FaArrowRight />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.box}>
          <h3>For Renters</h3>
          <p>Start exploring properties and find your next home.</p>
          <Link className={`btn ${styles.btn}`} href="/properties">
            View Properties
          </Link>
        </div>
        <div className={styles.box}>
          <h3>For Owners</h3>
          <p>List your property and connect with potential tenants.</p>
          <Link className={`btn ${styles.btn}`} href="/properties">
            Add property
          </Link>
        </div>
      </div>
    </section>
  );
}
