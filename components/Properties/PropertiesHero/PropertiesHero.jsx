import styles from './propertiesHero.module.scss';
import PropertySearchForm from '@/components/Home/PropertySearchForm/PropertySearchForm';

function PropertiesHero() {
  return (
    <section className={styles.container}>
      <PropertySearchForm />
    </section>
  );
}

export default PropertiesHero;
