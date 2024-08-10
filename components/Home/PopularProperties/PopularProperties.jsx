'use client';
import styles from './popularProperties.module.scss';
import { inter } from '@/public/font/font';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import properties from '@/properties.json';
import Card from './Card/Card';

function PopularProperties() {
  const popularProperties = properties.slice(0, 4);
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
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
          <button className="btn">
            <FaArrowLeft />
          </button>
          <button className="btn">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className={styles.cards}>
        {popularProperties.map((property, i) => (
          <Card key={i} i={i} property={property} />
        ))}
      </div>
    </section>
  );
}

export default PopularProperties;
