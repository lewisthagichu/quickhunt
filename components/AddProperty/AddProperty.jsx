import styles from './addProperty.module.scss';
import PropertyAddForm from './PropertyAddForm/PropertyAddForm';

function AddProperty() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <PropertyAddForm />
      </div>
    </section>
  );
}

export default AddProperty;
