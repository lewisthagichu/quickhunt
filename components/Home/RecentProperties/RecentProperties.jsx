import styles from './recentProperties.module.scss';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import { fetchRecentProperties } from '@/utils/fetchProperties';

export default async function RecentProperties() {
  const { properties } = await fetchRecentProperties();

  return (
    properties?.length > 0 && (
      <section className={styles.container}>
        <h2>
          Recent <span>Properties</span>
        </h2>
        <div className={styles.cards}>
          {properties?.map((property, i) => (
            <div key={`r_${i}`} className={styles.item}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </section>
    )
  );
}
