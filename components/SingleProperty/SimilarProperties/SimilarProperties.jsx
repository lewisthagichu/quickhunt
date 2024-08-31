'use client';
import styles from './similarProperties.module.scss';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CardSimilarProperties from './CardSimilar/CardSimilarProperties';
import SimilarCardSkeleton from '@/components/Common/Skeletons/SimilarCardSkeleton./SimilarCardSkeleton';

export default function SimilarProperties({ property }) {
  const [loading, setLoading] = useState(true);
  const [hasProperties, setHasProperties] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [similarProperties, setSimilarProperties] = useState([]);

  function showNextCard() {
    setCardIndex((index) => {
      if (index === similarProperties.length - 3)
        return similarProperties.length - 3;
      return index + 1;
    });
  }

  function showPrevCard() {
    setCardIndex((index) => {
      if (index === 0) return 0;
      return index - 1;
    });
  }

  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await fetch('/api/properties/similar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            propertyID: property._id,
          }),
        });

        if (res.status === 200) {
          const { similarProperties } = await res.json();
          const hasProperties = similarProperties.length > 0;

          setHasProperties(hasProperties);
          setSimilarProperties(similarProperties);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProperties();
  }, [property._id]);

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>
          Similar <span>Properties</span>
        </h2>
        <div className={styles.btns}>
          {!loading && (
            <>
              <button
                disabled={cardIndex === 0}
                onClick={showPrevCard}
                className="btn"
              >
                <FaArrowLeft />
              </button>
              <button
                disabled={cardIndex === similarProperties?.length - 3}
                onClick={showNextCard}
                className="btn"
              >
                <FaArrowRight />
              </button>
            </>
          )}
        </div>
      </div>

      {loading || !hasProperties ? (
        <div className={styles.cards}>
          {[...Array(3)].map((_, i) => (
            <div key={`_${i}`} className={styles.item}>
              <SimilarCardSkeleton cardIndex={cardIndex} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.cards}>
          {similarProperties.map((property, i) => (
            <div key={`s_${i}`} className={styles.item}>
              <CardSimilarProperties
                cardIndex={cardIndex}
                property={property}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
