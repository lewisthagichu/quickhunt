import styles from './mainSection.module.scss';
import PropertyMap from '../PropertyMap/PropertyMap';
import { FaBed, FaBath, FaRulerCombined, FaCheck } from 'react-icons/fa';

export default function MainSection({ property }) {
  return (
    <div className={styles.container}>
      <div className={styles.overview}>
        <h3>Overview</h3>
        <div className={styles.list}>
          <p>
            <FaBed /> <span>{property.beds}</span> <span>Beds</span>
          </p>
          <p>
            <FaBath />
            <span> {property.baths} </span> <span>Baths</span>
          </p>
          <p>
            <FaRulerCombined />
            <span> {property.square_feet} </span>
            <span>sqft</span>
          </p>
        </div>
      </div>

      <div className={styles.description}>
        <h3>Description</h3>
        <p>{property.description}</p>
      </div>

      <div className={styles.amenities}>
        <h3>Amenities</h3>
        <ul>
          {property.amenities.map((amenity, index) => (
            <li key={index}>
              <FaCheck /> {amenity}
            </li>
          ))}
        </ul>
      </div>

      <PropertyMap property={property} />
    </div>
  );
}
