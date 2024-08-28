import styles from './propertyDetails.module.scss';
import MainSection from './MainSection/MainSection';
import SideSection from './SideSection/SideSection';

export default function PropertyDetails({ property }) {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <MainSection property={property} />
        <SideSection property={property} />
      </div>
    </section>
  );
}
