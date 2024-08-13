import styles from './listingCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdPerson } from 'react-icons/io';
import { FaBed, FaBath, FaRulerCombined, FaMapMarker } from 'react-icons/fa';

function ListingCard({ property }) {
  const { owner, name, rates, location, images } = property;
  return (
    <div className={styles.container}>
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
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
            eos.
          </h3>
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

        <div className={styles.border}></div>

        <div className={styles.bottomDetails}>
          <Link
            href={`/properties/${property._id}/edit`}
            className={`${styles.btn} ${styles.edit} btn`}
          >
            Edit
          </Link>
          <button
            href={`/properties/${property._id}`}
            className={`${styles.btn} ${styles.delete} btn`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
