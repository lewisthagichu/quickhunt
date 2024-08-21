import styles from './Proposition.module.scss';

function Propositon() {
  return (
    <section className={styles.container}>
      <div className={styles.quote}>
        <h5>FULFILL YOUR DREAMS</h5>
        <p>
          "We bridge the gap between dream homes and those who dream of them.
          Whether you're searching or listing, we make it simple."
        </p>
      </div>
    </section>
  );
}

export default Propositon;
