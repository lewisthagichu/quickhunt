'use client';
import styles from './propertyHero.module.scss';
import { FaMapMarker } from 'react-icons/fa';
import { Gallery } from 'react-photoswipe-gallery';
import getRateDisplay from '@/utils/getRateDisplay';
import RenderImageItem from './RenderImageItem';
import BookmarkButton from '@/components/Common/BookmarkButton/BookmarkButton';

export default function PropertyHero({ property }) {
  const { images, location } = property;
  const smallImages = images.length > 1 ? images.slice(1) : [];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <div>
            <small>{property.type}</small>
          </div>
          <div className={styles.left}>
            <h3 className={styles.name}>{property.name}</h3>
            <h3 className={styles.price}>KSh {getRateDisplay(property)}</h3>
          </div>

          <div className={styles.location}>
            <FaMapMarker />
            <span>
              {' '}
              {location.street}, {location.town}
            </span>
          </div>
        </div>

        <Gallery>
          <div className={styles.imagesContainer}>
            <div className={styles.largeContainer}>
              <RenderImageItem image={images[0]} />
              <BookmarkButton property={property} />
            </div>

            {smallImages.length > 0 && (
              <div className={styles.smallImages}>
                {smallImages.map((image, i) => (
                  <div key={`_${i}`} className={styles.smallContainer}>
                    <RenderImageItem
                      image={image}
                      sizes="50vw"
                      priority={false}
                    />
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
