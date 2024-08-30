'use client';
import { inter } from '@/public/font/font';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import styles from './listings.module.scss';
import ListingCard from './ListingCard/ListingCard';
import PlaceholderCards from '@/components/Common/PlaceholderCards/PlaceholderCards';
import Spinner from '@/components/Spinner';

const Listings = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [hasProperties, setHasProperties] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    const fetchProperties = async (userID) => {
      if (!userID) {
        return;
      }

      try {
        const res = await fetch(`/api/properties/user/${userID}`);

        if (res.status === 200) {
          const data = await res.json();
          const hasProperties = data.length > 0;

          setHasProperties(hasProperties);
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

  const handleDeleteProperty = async (propertyID) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this property?'
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/properties/${propertyID}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        // Remove the property from state
        const updatedProperties = properties.filter(
          (property) => property._id !== propertyID
        );

        const hasProperties = updatedProperties.length > 0;

        setHasProperties(hasProperties);
        setProperties(updatedProperties);

        toast.success('Property Deleted');
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete property');
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <section className={` ${inter.className} ${styles.container}`}>
      {hasProperties ? (
        <div className={styles.cards}>
          {properties.map((property, index) => (
            <div key={property.id || `l_${index}`} className={styles.item}>
              <ListingCard
                property={property}
                handleDeleteProperty={handleDeleteProperty}
              />
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
