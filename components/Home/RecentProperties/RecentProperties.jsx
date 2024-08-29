import styles from './recentProperties.module.scss';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import { fetchProperties } from '@/utils/fetchProperties';

export default async function RecentProperties() {
  const { properties } = await fetchProperties();

  const recentProperties = properties
    ?.sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <section className={styles.container}>
      <h2>
        Recent <span>Properties</span>
      </h2>
      <div className={styles.cards}>
        {recentProperties?.map((property, i) => (
          <div key={`r_${i}`} className={styles.item}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </section>
  );
}
