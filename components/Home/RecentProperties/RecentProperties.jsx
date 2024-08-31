import styles from './recentProperties.module.scss';
import ServerPropertyCard from '@/components/Common/PropertyCard/ServerPropertyCard';
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
              <ServerPropertyCard property={property} />
              {/* <PropertyCard property={property} /> */}
            </div>
          ))}
        </div>
      </section>
    )
  );
}
