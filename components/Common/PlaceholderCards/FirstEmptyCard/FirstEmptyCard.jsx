import styles from './firstEmptyCard.module.scss';
import Link from 'next/link';

function FirstEmptyCard({ heading, cta, link, linkText }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{heading}</h2>
        <small>{cta}</small>
        <Link className={`btn ${styles.btn}`} href={link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default FirstEmptyCard;
