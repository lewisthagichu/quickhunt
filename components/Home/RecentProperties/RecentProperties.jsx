import styles from './recentProperties.module.scss';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import properties from '@/properties.json';
import { inter } from '@/public/font/font';

function RecentProperties() {
  const recentProperties = properties.slice(0, 3);

  return (
    <section className={`${styles.container} ${inter.className}`}>
      <h2>
        Recent <span>Properties</span>
      </h2>
      <div className={styles.cards}>
        {recentProperties.map((property, i) => (
          <PropertyCard key={i} property={property} />
        ))}
      </div>
    </section>
  );
}

export default RecentProperties;
