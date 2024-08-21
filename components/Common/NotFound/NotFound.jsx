import styles from './notFound.module.scss';
import Link from 'next/link';

function NotFound() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Error 404</h1>
        <div className={styles.content}>
          <h1>Oh, oh are we lost?</h1>
        </div>
      </div>
      <div className={styles.homeBtn}>
        <Link className={`btn ${styles.btn}`} href="/">
          Go back to home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
