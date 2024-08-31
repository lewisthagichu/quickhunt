'use client';
import { useState, useEffect } from 'react';
import styles from './wrapper.module.scss';
import Pagination from '@/components/Common/Pagination/Pagination';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import PlaceholderCards from '@/components/Common/PlaceholderCards/PlaceholderCards';
import PropertyCardSkeleton from '@/components/Common/Skeletons/PropertyCardSkeleton/PropertyCardSkeleton';

function PropertiesWrapper() {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `/api/properties?page=${page}&pageSize=${pageSize}`
        );

        if (!res.ok) throw new Error('Failed to fetch properties');

        const { total, properties } = await res.json();
        setProperties(properties);
        setTotal(total);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page, pageSize]);

  return (
    <section className={styles.container}>
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
            onPageChange={setPage}
          />
        </>
      ) : (
        <PlaceholderCards
          heading="No listings found"
          cta="Something went wrong. Try again later."
          link="/"
          linkText="Back to Home"
        />
      )}
    </section>
  );
}

export default PropertiesWrapper;
