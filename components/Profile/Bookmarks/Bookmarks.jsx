'use client';
import styles from './bookmarks.module.scss';
import { inter } from '@/public/font/font';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import PlaceholderCards from '@/components/Common/PlaceholderCards/PlaceholderCards';
import Spinner from '@/components/Spinner';

function Bookmarks() {
  const { data: session } = useSession();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!session) return;

    // Fetch bookmarked properties
    const fetchBookmarkedProperties = async () => {
      try {
        const res = await fetch('/api/bookmarks');

        if (res.status === 200) {
          const { bookmarkedProperties } = await res.json();
          setProperties(bookmarkedProperties);
        } else {
          throw new Error();
        }
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarkedProperties();
  }, [session]);

  const hasBookmarks = !loading && properties.length > 0;

  return loading ? (
    <Spinner />
  ) : (
    <section className={` ${inter.className} ${styles.container}`}>
      {hasBookmarks ? (
        <div className={styles.cards}>
          {properties.map((property, index) => (
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
