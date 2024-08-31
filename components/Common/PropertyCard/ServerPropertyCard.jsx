import styles from './propertyCard.module.scss';
import Link from 'next/link';
import getRateDisplay from '@/utils/getRateDisplay';
import ImageBlur from '../ImageBlur/ImageBlur';
import { IoMdPerson } from 'react-icons/io';
import { FaBed, FaBath, FaRulerCombined, FaMapMarker } from 'react-icons/fa';

export default function ServerPropertyCard({ property }) {
  const { name, location, images, seller_info } = property;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <ImageBlur
          src={images[0]}
          fill={true}
          sizes="(max-width: 768px) 100vw, 33vw"
          alt="Picture of the property"
        />

        <h3>KSh {getRateDisplay(property)}</h3>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.top}>
          <div className={styles.location}>
            <FaMapMarker />
            <span>
              {' '}
              {location.street}, {location.town}
            </span>
          </div>
          <h3>{name}</h3>
        </div>

        <div className={styles.amenities}>
          <p>
            <FaBed /> <span>{property.beds}</span> <span>Beds</span>
          </p>
          <p>
            <FaBath />
            <span> {property.baths}</span> <span>Baths</span>
          </p>
          <p>
            <FaRulerCombined />
            <span> {property.square_feet} </span>
            <span>sqft</span>
          </p>
        </div>

        <div className={styles.bottom}>
          <div className={styles.owner}>
            <IoMdPerson />
            <span>{seller_info.name}</span>
          </div>
          <div className={styles.border}></div>
          <Link
            href={`/properties/${property._id}`}
            className={`${styles.btn} btn`}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
