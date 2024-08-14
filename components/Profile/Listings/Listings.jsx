import { inter } from '@/public/font/font';
import styles from './listings.module.scss';
import ListingCard from './ListingCard/ListingCard';
import PlaceholderCards from '@/components/Common/PlaceholderCards/PlaceholderCards';
import properties from '@/properties.json';

const Listings = () => {
  // const listings = properties.slice(0, 3);
  const listings = [];
  const hasListings = listings.length > 0;

  return (
    <section className={` ${inter.className} ${styles.container}`}>
      {hasListings ? (
        <div className={styles.cards}>
          {listings.map((property, index) => (
            <div key={property.id || `l_${index}`} className={styles.item}>
              <ListingCard property={property} />
            </div>
          ))}
        </div>
      ) : (
        <PlaceholderCards
          heading="Upload your first listing"
          cta="Showcase your rental to interested hunters."
          link="/properties/add"
          linkText="Upload your first listing"
        />
      )}
    </section>
  );
};

export default Listings;
