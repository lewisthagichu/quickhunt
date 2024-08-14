import { inter } from '@/public/font/font';
import styles from './bookmarks.module.scss';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import PlaceholderCards from '@/components/Common/PlaceholderCards/PlaceholderCards';
import properties from '@/properties.json';

function Bookmarks() {
  // const bookmarks = properties.slice(3, 6);
  const bookmarks = [];
  const hasBookmarks = bookmarks.length > 0;
  return (
    <section className={` ${inter.className} ${styles.container}`}>
      {hasBookmarks ? (
        <div className={styles.cards}>
          {bookmarks.map((property, index) => (
            <div key={property.id || `l_${index}`} className={styles.item}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      ) : (
        <PlaceholderCards
          heading="No bookmarks"
          cta="Check out listings and bookmark your favourites."
          link="/properties"
          linkText="Explore listings"
        />
      )}
    </section>
  );
}

export default Bookmarks;
