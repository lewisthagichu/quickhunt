import styles from './propertyDetails.module.scss';
import MainSection from './MainSection/MainSection';
import SideSection from './SideSection/SideSection';
import properties from '@/test.json';

export default function PropertyDetails() {
  const property = properties[0];
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <MainSection property={property} />
        <SideSection property={property} />
      </div>
    </section>
  );
}
