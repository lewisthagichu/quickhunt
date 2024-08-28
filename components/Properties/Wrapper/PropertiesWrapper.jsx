'use client';
import styles from './wrapper.module.scss';
import { useState, useEffect } from 'react';
import Pagination from '@/components/Common/Pagination/Pagination';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import PlaceholderCards from '@/components/Common/PlaceholderCards/PlaceholderCards';
import Spinner from '@/components/Spinner';

function PropertiesWrapper() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `/api/properties?page=${page}&pageSize=${pageSize}`
        );

        if (res.status !== 200) {
          throw new Error();
        }

        const { total, properties } = await res.json();
        setProperties(properties);
        setTotal(total);
      } catch (error) {
        // Handle errors
        console.log(error);
        toast.error('Failed to fetch properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page, pageSize]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const hasProperties = properties?.length > 0;

  return loading ? (
    <Spinner />
  ) : (
    <section className={styles.container}>
      {hasProperties ? (
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

export default PropertiesWrapper;
