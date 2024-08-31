import styles from './propertyCardSkeleton.module.scss';
import Skeleton from 'react-loading-skeleton';

export default function PropertyCardSkeleton() {
  return (
    <div className={styles.container}>
      <Skeleton containerClassName={styles.wrapper} />
    </div>
  );
}
