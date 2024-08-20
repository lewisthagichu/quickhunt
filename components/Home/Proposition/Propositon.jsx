import styles from './Proposition.module.scss';

const withoutPoints = [
  'Tedious property searches',
  'Limited exposure for your listings',
  'Unreliable tenant matches',
  'Endless property visits',
  'Disconnected communication',
  'Stressful and lengthy rental processes',
  'Missed opportunities with unviewed properties',
];
const withPoints = [
  'Seamless property browsing',
  'Wide reach for your listings',
  'Verified tenant connections',
  'Virtual tours at your fingertips',
  'Instant communication with property owners',
  'Streamlined, stress-free rental experience',
  'Bookmark your favorites for easy access',
];

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
      <div className={styles.value}>
        <h5>Why BomaBora is Right For You?</h5>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h6>Without BomaBora</h6>
            <ul>
              {withoutPoints.map((point, i) => (
                <li key={`wo_${i}`}>
                  <span></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h6>With BomaBora</h6>
            <ul>
              {withPoints.map((point, i) => (
                <li key={`w_${i}`}>
                  <span>+</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Propositon;
