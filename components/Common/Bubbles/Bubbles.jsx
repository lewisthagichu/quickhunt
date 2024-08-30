import styles from './bubbles.module.scss';

export default function Bubbles() {
  return (
    <div className={styles.loadingBubbles}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  );
}
