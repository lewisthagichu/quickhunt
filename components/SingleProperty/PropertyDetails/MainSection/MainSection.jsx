import PropertyMap from '../PropertyMap/PropertyMap';
import styles from './mainSection.module.scss';
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam
          sed maxime quis fugit asperiores ad velit aliquam nulla nihil
          provident cumque tempore saepe, corporis ipsam vitae optio pariatur ut
          quod recusandae reiciendis. Nemo quibusdam consequatur necessitatibus
          excepturi voluptas ipsa libero pariatur neque, perspiciatis, sunt
          aspernatur similique, tempore earum consectetur.
        </p>
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
