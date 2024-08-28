import styles from './CTA.module.scss';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className={styles.container}>
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
          <Link className={`btn ${styles.btn}`} href="/properties/add">
            Add property
          </Link>
        </div>
      </div>
    </section>
  );
}
