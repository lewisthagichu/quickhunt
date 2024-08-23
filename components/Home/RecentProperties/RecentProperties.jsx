import styles from './recentProperties.module.scss';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import properties from '@/properties.json';

function RecentProperties() {
  const recentProperties = properties.slice(0, 3);

  return (
    <section className={styles.container}>
      <h2>
        Recent <span>Properties</span>
      </h2>
      <div className={styles.cards}>
        {recentProperties.map((property, i) => (
          <div key={`r_${i}`} className={styles.item}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentProperties;
