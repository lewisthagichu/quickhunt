import styles from './wrapper.module.scss';
import Pagination from '@/components/Common/Pagination/Pagination';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import PlaceholderCards from '@/components/Common/PlaceholderCards/PlaceholderCards';
import properties from '@/test.json';

function PropertiesWrapper() {
  // const properties = [];
  const listings = properties.slice(0, 3);
  const hasListings = listings.length > 0;
  return (
    <section className={styles.container}>
      {hasListings ? (
        <div className={styles.cards}>
          {properties.map((property, index) => (
            <div key={property.id || `l_${index}`} className={styles.item}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      ) : (
        <PlaceholderCards
          heading="No listings found"
          cta="Something went wrong. Try again later."
          link="/"
          linkText="Back to Home"
        />
      )}
      <Pagination />
    </section>
  );
}

export default PropertiesWrapper;
