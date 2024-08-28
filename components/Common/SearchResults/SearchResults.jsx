import styles from './searchResults.module.scss';
import PropertyCard from '../PropertyCard/PropertyCard';
import PlaceholderCards from '../PlaceholderCards/PlaceholderCards';
import Pagination from '../Pagination/Pagination';
import properties from '@/test.json';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

function SearchResults() {
  // const properties = [];
  const listings = properties.slice(0, 3);
  const hasListings = listings.length > 0;

  return (
    <section className={styles.container}>
      {hasListings ? (
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <Link href="/properties">
              <FaArrowAltCircleLeft />
              <span>Back To Properties</span>
            </Link>
            <h2>Search Results</h2>
          </div>
          <div className={styles.cards}>
            {properties.map((property, index) => (
              <div key={property.id || `l_${index}`} className={styles.item}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
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

export default SearchResults;
