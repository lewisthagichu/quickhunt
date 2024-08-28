'use client';
import styles from './pagination.module.scss';

function Pagination({ page, pageSize, total, onPageChange }) {
  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className={styles.container}>
      <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
        Previous
      </button>
      <span>
        {page} of {totalPages}
      </span>
      <button
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
