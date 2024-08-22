'use client';
import styles from './propertyHero.module.scss';
import { FaMapMarker } from 'react-icons/fa';
import { Gallery } from 'react-photoswipe-gallery';
import RenderImageItem from './RenderImageItem';
import properties from '@/properties.json';

function PropertyHero() {
  const { images } = properties[0];
  const smallImages = images.length > 1 ? images.slice(1) : [];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <div>
            <small>Apartment</small>
          </div>
          <div className={styles.left}>
            <h3 className={styles.name}>Charming Cottage Getaway</h3>
            <h3 className={styles.price}>KSh 100,000/mo</h3>
          </div>

          <div className={styles.location}>
            <FaMapMarker />
            <span> Kileleshwa, Nairobi</span>
          </div>
        </div>

        <Gallery id="my-gallery">
          <div className={styles.imagesContainer}>
            <div className={styles.largeContainer}>
              <RenderImageItem image={images[1]} />
            </div>

            {smallImages.length > 0 && (
              <div className={styles.smallImages}>
                {smallImages.map((image, i) => (
                  <div key={`s_${i}`} className={styles.smallContainer}>
                    <RenderImageItem image={image} sizes="50vw" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Gallery>
      </div>
    </section>
  );
}

export default PropertyHero;
