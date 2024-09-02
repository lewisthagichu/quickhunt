'use client';
import styles from './searchResults.module.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import PropertyCard from '../PropertyCard/PropertyCard';
import PlaceholderCards from '../PlaceholderCards/PlaceholderCards';
import Pagination from '../Pagination/Pagination';
import Link from 'next/link';
import PropertyCardSkeleton from '../Skeletons/PropertyCardSkeleton/PropertyCardSkeleton';

function SearchResults() {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
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

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Link href="/properties">
            <FaArrowAltCircleLeft />
            <span className="link-underline">Back to properties</span>
          </Link>
          <h2>Search Results</h2>
        </div>

        {loading ? (
          <div className={styles.cards}>
            {[...Array(pageSize)].map((_, index) => (
              <div key={index} className={styles.item}>
                <PropertyCardSkeleton />
              </div>
            ))}
          </div>
        ) : properties.length ? (
          <>
            <div className={styles.cards}>
              {properties.map((property) => (
                <div key={property.id} className={styles.item}>
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
            <Pagination
              page={page}
              pageSize={pageSize}
              total={total}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <PlaceholderCards
            heading="No properties found"
            cta="Try searching for something else."
            link="/properties"
            linkText="View all properties"
          />
        )}
      </div>
    </section>
  );
}

export default SearchResults;
