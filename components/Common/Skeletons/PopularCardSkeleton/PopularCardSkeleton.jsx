import styles from './popularCardSkeleton.module.scss';
import Skeleton from 'react-loading-skeleton';

export default function PopularCardSkeleton({ cardIndex }) {
  return (
    <div
      className={styles.container}
      style={{ translate: `${-100 * cardIndex}%` }}
    >
      <Skeleton containerClassName={styles.wrapper} />
    </div>
  );
}
