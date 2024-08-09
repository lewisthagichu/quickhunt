import styles from './popularProperties.module.scss';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import properties from '@/properties.json';
import { inter } from '@/public/font/font';

function PopularProperties() {
  const popularProperties = properties.slice(0, 3);

  return (
    <section className={`${styles.container} ${inter.className}`}>
      <h2>
        Popular <span>Properties</span>
      </h2>
      <div className={styles.cards}>
        {popularProperties.map((property, i) => (
          <PropertyCard key={i} property={property} />
        ))}
      </div>
    </section>
  );
}

export default PopularProperties;
