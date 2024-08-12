import Pagination from '@/components/Common/Pagination/Pagination';
import styles from './wrapper.module.scss';
import properties from '@/properties.json';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';

function PropertiesWrapper() {
  //   const properties = [];
  return (
    <section className={styles.container}>
      {properties.length === 0 ? (
        <p>No properties</p>
      ) : (
        <div className={styles.cards}>
          {properties.map((property, i) => (
            <PropertyCard key={i} property={property} />
          ))}
        </div>
      )}
      <Pagination />
    </section>
  );
}

export default PropertiesWrapper;
