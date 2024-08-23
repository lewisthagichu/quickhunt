'use client';
import styles from './propertySearchForm.module.scss';
import { FaLocationDot, FaHouse, FaMoneyBill } from 'react-icons/fa6';

function PropertySearchForm() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.col}>
          <div className={styles.icon}>
            <FaLocationDot />
          </div>
          <div className={styles.data}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Search Location/Keywords"
            />
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.icon}>
            <FaHouse />
          </div>
          <div className={styles.data}>
            <label htmlFor="property-type">Select Type</label>
            <select name="property-type" id="property-type">
              <option value="all">All</option>
              <option value="Studio">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="One bedroom">One bedroom</option>
              <option value="Two bedroom">Two bedroom</option>
              <option value="Three bedroom">Three bedroom</option>
              <option value="4+">Four bedroom+</option>
              <option value="loft">Commercial</option>
              <option value="House">House</option>
              <option value="Student housing">Student housing</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.icon}>
            <FaMoneyBill />
          </div>
          <div className={styles.data}>
            <label htmlFor="Budget">Budget</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter Esimated Budget"
            />
          </div>
        </div>

        <div className={styles.btn}>
          <button className="btn">Search property</button>
        </div>
      </form>
    </div>
  );
}

export default PropertySearchForm;
