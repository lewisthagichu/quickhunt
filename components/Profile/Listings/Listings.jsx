import ListingCard from './ListingCard/ListingCard';
import styles from './listings.module.scss';
import properties from '@/properties.json';

function Listings() {
  const listings = properties.slice(0, 3);
  return (
    <section className={styles.container}>
      <div className={styles.cards}>
        {listings.map((property, index) => (
          <div className={styles.item}>
            <ListingCard key={index} property={property} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Listings;
