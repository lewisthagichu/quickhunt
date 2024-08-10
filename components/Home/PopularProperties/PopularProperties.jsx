'use client';
import styles from './popularProperties.module.scss';
import { inter } from '@/public/font/font';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import properties from '@/properties.json';
import Card from './Card/Card';

function PopularProperties() {
  const popularProperties = properties.slice(3, 9);
  const [cardIndex, setCardIndex] = useState(0);

  function showNextCard() {
    setCardIndex((index) => {
      if (index === popularProperties.length - 3)
        return popularProperties.length - 3;
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
    <section className={`${styles.container} ${inter.className}`}>
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
            disabled={cardIndex === popularProperties.length - 3}
            onClick={showNextCard}
            className="btn"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className={styles.cards}>
        {popularProperties.map((property, i) => (
          <Card key={i} cardIndex={cardIndex} property={property} />
        ))}
      </div>
    </section>
  );
}

export default PopularProperties;
