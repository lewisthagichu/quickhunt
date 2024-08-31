'use client';
import styles from './sideSection.module.scss';
import PropertyContactForm from '../PropertyContactForm/PropertyContactForm';

export default function SideSection({ property }) {
  const { name, phone, email } = property?.seller_info;
  return (
    <div className={styles.container}>
      <div className={styles.sellerInfo}>
        <h3>Contact details</h3>
        <div className={styles.info}>
          {name && (
            <p>
              Owner: <span>{name}</span>
            </p>
          )}
          {phone && (
            <p>
              Phone: <span>{phone}</span>
            </p>
          )}
          {email && (
            <p>
              Email: <span>{email}</span>
            </p>
          )}
        </div>
      </div>
      <PropertyContactForm property={property} />
    </div>
  );
}
