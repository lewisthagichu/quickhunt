import styles from './similarCardSkeleton.module.scss';
import Skeleton from 'react-loading-skeleton';

export default function SimilarCardSkeleton({ cardIndex }) {
  return (
    <div
      className={styles.container}
      style={{ translate: `${-100 * cardIndex}%` }}
    >
      <Skeleton containerClassName={styles.wrapper} />
    </div>
  );
}
