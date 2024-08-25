import styles from './WhyUs.module.scss';
import { withPoints, withoutPoints } from './data';

export default function WhyUs() {
  return (
    <section className={styles.container}>
      <div className={styles.value}>
        <h5 className={styles.headline}>Why Choose Us?</h5>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h6>Without QuickHunt</h6>
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
            <h6>With QuickHunt</h6>
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
