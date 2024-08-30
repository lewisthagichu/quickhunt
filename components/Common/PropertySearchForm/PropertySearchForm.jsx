'use client';
import styles from './propertySearchForm.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaLocationDot, FaHouse, FaMoneyBill } from 'react-icons/fa6';

function PropertySearchForm() {
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [propertyType, setPropertyType] = useState('All');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location === '' && budget === '' && propertyType === 'All') {
      router.push('/properties');
    } else {
      const query = `?location=${location}&propertyType=${propertyType}&budget=${budget}`;
      router.push(`/properties/search-results/${query}`);
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.icon}>
            <FaHouse />
          </div>
          <div className={styles.data}>
            <label htmlFor="property-type">Select Type</label>
            <select
              name="property-type"
              id="property-type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="One bedroom">One bedroom</option>
              <option value="Two bedroom">Two bedroom</option>
              <option value="Three bedroom">Three bedroom</option>
              <option value="Four bedroom+">Four bedroom+</option>
              <option value="Commercial">Commercial</option>
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
            <label htmlFor="budget">Budget</label>
            <input
              type="number"
              name="budget"
              id="budget"
              placeholder="Enter Estimated Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
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
