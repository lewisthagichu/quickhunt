import styles from './editProperty.module.scss';
import PropertyEditForm from './PropertyEditForm/PropertyEditForm';

export default function EditProperty() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <PropertyEditForm />
      </div>
    </section>
  );
}
