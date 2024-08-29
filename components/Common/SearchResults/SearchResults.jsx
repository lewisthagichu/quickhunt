'use client';
import styles from './searchResults.module.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import PropertyCard from '../PropertyCard/PropertyCard';
import PlaceholderCards from '../PlaceholderCards/PlaceholderCards';
import Pagination from '../Pagination/Pagination';
import Link from 'next/link';
import Spinner from '@/components/Spinner';

function SearchResults() {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [hasProperties, setHasProperties] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [total, setTotal] = useState(0);

  const searchParams = useSearchParams();
  const location = searchParams.get('location');
  const propertyType = searchParams.get('propertyType');
  const budget = searchParams.get('budget');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}&budget=${budget}&page=${page}&pageSize=${pageSize}`
        );

        if (res.status === 200) {
          const { properties, total } = await res.json();
          const hasProperties = total > 0;

          setHasProperties(hasProperties);
          setProperties(properties);
          setTotal(total);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [location, propertyType, budget, page, pageSize]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  console.log(hasProperties);

  if (loading) return <Spinner />;

  return (
    <section className={styles.container}>
      {hasProperties ? (
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
          heading="No properties found"
          cta="Try searching for something else."
          link="/properties"
          linkText="View all properties"
        />
      )}
      {hasProperties && (
        <Pagination
          page={page}
          pageSize={pageSize}
          total={total}
          setPage={setPage}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
}

export default SearchResults;
