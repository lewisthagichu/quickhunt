import styles from './popularProperties.module.scss';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
// import properties from '../../../'

function PopularProperties() {
  // const recentProperties = properties
  // ?.sort(() => Math.random() - Math.random())
  // .slice(0, 3);
  return (
    <section className={styles.container}>
      <h2>Popular Properties</h2>
      <div className={styles.cards}>
        {Array.from([1, 2, 3].map((card, i) => <PropertyCard key={i} />))}
      </div>
    </section>
  );
}

export default PopularProperties;
