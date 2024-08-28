'use client';
import { inter } from '@/public/font/font';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import styles from './listings.module.scss';
import ListingCard from './ListingCard/ListingCard';
import PlaceholderCards from '@/components/Common/PlaceholderCards/PlaceholderCards';
import Spinner from '@/components/Spinner';

const Listings = () => {
  const { data: session } = useSession();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async (userID) => {
      if (!userID) {
        return;
      }

      try {
        const res = await fetch(`/api/properties/user/${userID}`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch properties when session is available
    if (session?.user?.id) {
      fetchProperties(session.user.id);
    }
  }, [session]);

  const noListings = !loading && properties.length === 0;

  return loading ? (
    <Spinner />
  ) : (
    <section className={` ${inter.className} ${styles.container}`}>
      {!noListings ? (
        <div className={styles.cards}>
          {properties.map((property, index) => (
            <div key={property.id || `l_${index}`} className={styles.item}>
              <ListingCard property={property} />
            </div>
          ))}
        </div>
      ) : (
        <PlaceholderCards
          heading="Upload your first listing"
          cta="Showcase your rentals to interested hunters."
          link="/properties/add"
          linkText="Upload your first listing"
        />
      )}
    </section>
  );
};

export default Listings;
