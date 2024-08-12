'use client';
import styles from './propertyAddForm.module.scss';
import { useState } from 'react';

function PropertyAddForm() {
  const [fields, setFields] = useState({
    type: '',
    name: '',
    description: '',
    location: {
      street: '',
      city: '',
      county: '',
      zipcode: '',
    },
    beds: '',
    baths: '',
    square_feet: '',
    amenities: [],
    rates: {
      nightly: '',
      weekly: '',
      monthly: '',
    },
    seller_info: {
      name: '',
      email: '',
      phone: '',
    },
    images: [],
  });

  return (
    <form
      className={styles.container}
      action="/api/properties"
      method="POST"
      encType="multipart/form-data"
    >
      <h2>Add Property</h2>

      <div className={styles.row}>
        <label htmlFor="type">Property Type*</label>
        <select
          id="type"
          name="type"
          required
          // value={fields.type}
        >
          <option value="Studio">Studio</option>
          <option value="One bedroom">One bedroom</option>
          <option value="Two bedroom">Two bedroom</option>
          <option value="Three bedroom">Three bedroom</option>
          <option value="loft">Loft</option>
          <option value="House">House</option>
          <option value="Student housing">Student housing</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.row}>
        <label>Listing Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="eg. Beautiful Apartment In Kileleshwa"
          required
          // value={fields.name}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="6"
          placeholder="Add a description of your property"
          // value={fields.description}
        ></textarea>
      </div>

      <div className={`${styles.row} ${styles.location}`}>
        <label>Location*</label>
        <input
          type="text"
          id="street"
          name="location.street"
          placeholder="Street"
          // value={fields.location.street}
        />
        <input
          type="text"
          id="city"
          name="location.city"
          placeholder="City"
          required
          // value={fields.location.city}
        />
        <input
          type="text"
          id="county"
          name="location.county"
          placeholder="County"
          required
          // value={fields.location.county}
        />
        <input
          type="text"
          id="zipcode"
          name="location.zipcode"
          placeholder="Zipcode"
          // value={fields.location.zipcode}
        />
      </div>

      <div className={`${styles.row} ${styles.summary}`}>
        <div className={styles.col}>
          <label htmlFor="beds">Beds*</label>
          <input
            type="number"
            id="beds"
            name="beds"
            required
            // value={fields.beds}
          />
        </div>
        <div className={styles.col}>
          <label htmlFor="baths">Baths*</label>
          <input
            type="number"
            id="baths"
            name="baths"
            required
            // value={fields.baths}
          />
        </div>
        <div className={styles.col}>
          <label htmlFor="square_feet">Square Feet*</label>
          <input
            type="number"
            id="square_feet"
            name="square_feet"
            required
            // value={fields.square_feet}
          />
        </div>
      </div>

      <div className={styles.row}>
        <label>Amenities</label>
        <div className={styles.amenities}>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_wifi"
              name="amenities"
              value="Wifi"

              // checked={fields.amenities.includes('Wifi')}
            />
            <label htmlFor="amenity_wifi">Wifi</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_kitchen"
              name="amenities"
              value="Full Kitchen"

              // checked={fields.amenities.includes('Full Kitchen')}
            />
            <label htmlFor="amenity_kitchen">Full Kitchen</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_washer_dryer"
              name="amenities"
              value="Washer & Dryer"

              // checked={fields.amenities.includes('Washer & Dryer')}
            />
            <label htmlFor="amenity_washer_dryer">Washer & Dryer</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_free_parking"
              name="amenities"
              value="Free Parking"

              // checked={fields.amenities.includes('Free Parking')}
            />
            <label htmlFor="amenity_free_parking">Free Parking</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_pool"
              name="amenities"
              value="Swimming Pool"

              // checked={fields.amenities.includes('Swimming Pool')}
            />
            <label htmlFor="amenity_pool">Swimming Pool</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_playground"
              name="amenities"
              value="Playground"

              // checked={fields.amenities.includes('Playground')}
            />
            <label htmlFor="amenity_hot_tub">Playground</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_24_7_security"
              name="amenities"
              value="24/7 Security"
              // checked={fields.amenities.includes('24/7 Security')}
            />
            <label htmlFor="amenity_24_7_security">24/7 Security</label>
          </div>

          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_elevator_access"
              name="amenities"
              value="Elevator Access"

              // checked={fields.amenities.includes('Elevator Access')}
            />
            <label htmlFor="amenity_elevator_access">Elevator Access</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_dishwasher"
              name="amenities"
              value="Dishwasher"

              // checked={fields.amenities.includes('Dishwasher')}
            />
            <label htmlFor="amenity_dishwasher">Dishwasher</label>
          </div>

          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_air_conditioning"
              name="amenities"
              value="Air Conditioning"

              // checked={fields.amenities.includes('Air Conditioning')}
            />
            <label htmlFor="amenity_air_conditioning">Air Conditioning</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_balcony_patio"
              name="amenities"
              value="Balcony/Patio"

              // checked={fields.amenities.includes('Balcony/Patio')}
            />
            <label htmlFor="amenity_balcony_patio">Balcony/Patio</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_furniture"
              name="amenities"
              value="Furniture"

              // checked={fields.amenities.includes('Furniture')}
            />
            <label htmlFor="amenity_furniture">Furniture</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_gym_fitness_center"
              name="amenities"
              value="Gym/Fitness Center"

              // checked={fields.amenities.includes('Gym/Fitness Center')}
            />
            <label htmlFor="amenity_gym_fitness_center">
              Gym/Fitness Center
            </label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_wheelchair_accessible"
              name="amenities"
              value="Wheelchair Accessible"

              // checked={fields.amenities.includes('Wheelchair Accessible')}
            />
            <label htmlFor="amenity_wheelchair_accessible">
              Wheelchair Accessible
            </label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_garbage_collection"
              name="amenities"
              value="Garbage Collection"

              // checked={fields.amenities.includes('Garbage Collection')}
            />
            <label htmlFor="amenity_garbage_collection">
              Garbage Collection
            </label>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <label>Rates (Leave blank if not applicable)</label>
        <div className={styles.rates}>
          <div className={styles.rate}>
            <label htmlFor="weekly_rate">Weekly</label>
            <input
              type="number"
              id="weekly_rate"
              name="rates.weekly"

              // value={fields.rates.weekly}
            />
          </div>
          <div className={styles.rate}>
            <label htmlFor="monthly_rate">Monthly</label>
            <input
              type="number"
              id="monthly_rate"
              name="rates.monthly"

              // value={fields.rates.monthly}
            />
          </div>
          <div className={styles.rate}>
            <label htmlFor="nightly_rate">Nightly</label>
            <input
              type="number"
              id="nightly_rate"
              name="rates.nightly"

              // value={fields.rates.nightly}
            />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <label htmlFor="seller_name">Seller Name*</label>
        <input
          type="text"
          id="seller_name"
          name="seller_info.name"
          placeholder="Name"
          required
          // value={fields.seller_info.name}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="seller_email">Seller Email*</label>
        <input
          type="email"
          id="seller_email"
          name="seller_info.email"
          placeholder="Email address"
          required
          // value={fields.seller_info.email}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="seller_phone">Seller Phone*</label>
        <input
          type="tel"
          id="seller_phone"
          name="seller_info.phone"
          placeholder="Phone"
          // value={fields.seller_info.phone}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="images">Images* (Select up to 4 images)</label>
        <input
          type="file"
          id="images"
          name="images"
          accept="image/*"
          multiple
          required
        />
      </div>

      <div className={styles.bigBtn}>
        <button className={`btn ${styles.btn}`} type="submit">
          Add Property
        </button>
      </div>
    </form>
  );
}

export default PropertyAddForm;
