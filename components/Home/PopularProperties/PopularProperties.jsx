'use client';
import styles from './popularProperties.module.scss';
import { useState, useEffect } from 'react';
import { fetchProperties } from '@/utils/fetchProperties';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Card from './Card/Card';
import PopularCardSkeleton from '@/components/Common/Skeletons/PopularCardSkeleton/PopularCardSkeleton';

export default function PopularProperties() {
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

  return (
    <section className={styles.container}>
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
            disabled={cardIndex === properties?.length - 2}
            onClick={showNextCard}
            className="btn"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      {loading ? (
        <div className={styles.cards}>
          {[...Array(3)].map((_, i) => (
            <PopularCardSkeleton key={i} cardIndex={cardIndex} />
          ))}
        </div>
      ) : (
        <div className={styles.cards}>
          {properties.map((property, i) => (
            <Card key={i} cardIndex={cardIndex} property={property} />
          ))}
        </div>
      )}
    </section>
  );
}
