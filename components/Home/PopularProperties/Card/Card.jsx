'use client';
import styles from './card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdPerson } from 'react-icons/io';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarker,
  FaArrowUp,
} from 'react-icons/fa';

function Card({ property, cardIndex }) {
  const { owner, name, rates, location, images } = property;
  return (
    <div
      className={styles.container}
      style={{ translate: `${-100 * cardIndex}%` }}
    >
      <div className={styles.imageContainer}>
        <Image
          src={`/images/properties/${images[0]}`}
          fill={true}
          sizes="(max-width: 768px) 100vw, 33vw"
          alt="Picture of the property"
        />
        <h3>KES 2400/mo</h3>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.bio}>
          <div className={styles.location}>
            <FaMapMarker />
            <span>
              {' '}
              {location.city} {location.county}
            </span>
          </div>
          <h3>{name}</h3>
        </div>
        <div className={styles.middle}>
          <div className={styles.owner}>
            <IoMdPerson />
            <span>Lewis</span>
          </div>

          <div className={styles.amenities}>
            <p>
              <FaBed /> {property.beds} <span>Beds</span>
            </p>
            <p>
              <FaBath /> {property.baths} <span>Baths</span>
            </p>
            <p>
              <FaRulerCombined />
              {property.square_feet} <span>sqft</span>
            </p>
          </div>
        </div>

        <div className={styles.border}></div>
        <div className={styles.bottomDetails}>
          <Link
            href={`/properties/${property._id}`}
            className={`${styles.btn} btn`}
          >
            {/* <FaArrowUp /> */}
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
