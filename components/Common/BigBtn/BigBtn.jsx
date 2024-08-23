import styles from './bigBtn.module.scss';
import Link from 'next/link';

export default function BigBtn() {
  return (
    <section className={styles.bigBtn}>
      <Link className={`btn ${styles.btn}`} href="/properties">
        View all properties
      </Link>
    </section>
  );
}
