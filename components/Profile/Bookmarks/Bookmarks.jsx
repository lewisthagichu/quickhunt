import styles from './bookmarks.module.scss';
import PropertyCard from '@/components/Common/PropertyCard/PropertyCard';
import properties from '@/properties.json';

function Bookmarks() {
  const bookmarks = properties.slice(3, 6);
  return (
    <section className={styles.container}>
      <div className={styles.cards}>
        {bookmarks.map((property, index) => (
          <div key={`l_${index}`} className={styles.item}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bookmarks;
