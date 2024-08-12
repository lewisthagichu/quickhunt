import styles from './pagination.module.scss';

function Pagination() {
  return (
    <div className={styles.container}>
      <button>Previous</button>
      <span>1 of 1</span>
      <button>Next</button>
    </div>
  );
}

export default Pagination;
