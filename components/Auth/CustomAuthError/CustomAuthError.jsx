import styles from './customError.module.scss';
import errorMap from '../data';

export default function CustomAuthError({ searchParams }) {
  console.log(searchParams);
  return (
    <section className={styles.container}>
      <div>Error: {errorMap[searchParams.error]}</div>
    </section>
  );
}
