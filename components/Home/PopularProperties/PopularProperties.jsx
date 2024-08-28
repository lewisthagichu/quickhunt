'use client';
import styles from './popularProperties.module.scss';
import { useState, useEffect } from 'react';
import { fetchProperties } from '@/utils/fetchProperties';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Card from './Card/Card';
import Spinner from '@/components/Spinner';

function Properties() {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await fetchProperties({ showPopular: true });

        setProperties(res);
      } catch (error) {
        console.log(error);
        toast.error('Error fetching popular properties');
      } finally {
        setLoading(false);
      }
    };

    getProperties();
  }, []);

  function showNextCard() {
    setCardIndex((index) => {
      if (index === properties.length - 1) return properties.length - 1;
      return index + 1;
    });
  }

  function showPrevCard() {
    setCardIndex((index) => {
      if (index === 0) return 0;
      return index - 1;
    });
  }

  if (loading) {
    return <Spinner />;
  }
  const hasProperties = !loading && properties?.length > 0;

  return (
    <section className={styles.container}>
      {hasProperties ? (
        <>
          <div className={styles.title}>
            <h2>
              Popular <span>Properties</span>
            </h2>
            <div className={styles.btns}>
              <button
                disabled={cardIndex === 0}
                onClick={showPrevCard}
                className="btn"
              >
                <FaArrowLeft />
              </button>
              <button
                disabled={cardIndex === properties.length - 2}
                onClick={showNextCard}
                className="btn"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.cards}>
            {properties.map((property, i) => (
              <Card key={i} cardIndex={cardIndex} property={property} />
            ))}
          </div>
        </>
      ) : (
        <div>No properties available</div>
      )}
    </section>
  );
}

export default Properties;
