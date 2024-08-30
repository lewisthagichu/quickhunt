'use client';
import styles from './propertyEditForm.module.scss';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchProperty } from '@/utils/fetchProperties';
import { toast } from 'react-toastify';
import Bubbles from '@/components/Common/Bubbles/Bubbles';
import Spinner from '@/components/Spinner';

export default function PropertyEditForm() {
  const { id } = useParams();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    description: '',
    location: {
      street: '',
      town: '',
      county: '',
      postalcode: '',
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

  useEffect(() => {
    setMounted(true);
    // Fetch property for form
    const getPropertyData = async () => {
      try {
        const propertyData = await fetchProperty(id);

        if (propertyData && propertyData.rates) {
          const defaultRates = { ...propertyData.rates };

          // Check rates for null,if so make it an empty string
          for (const rate in defaultRates) {
            if (defaultRates[rate] === null) {
              defaultRates[rate] = '';
            }
          }
          propertyData.rates = defaultRates;
        }

        setFormData(propertyData);
      } catch (error) {
        console.log(error);

        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPropertyData();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [outerKey, innerKey] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [outerKey]: {
          ...prev[outerKey],
          [innerKey]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleAmenitiesChange(e) {
    const { checked, value } = e.target;

    // Clone the current array
    const updatedAmenities = [...formData.amenities];

    if (checked) {
      // Add value to array
      updatedAmenities.push(value);
    } else {
      const index = updatedAmenities.indexOf(value);

      if (index !== -1) {
        updatedAmenities.splice(index, 1);
      }
    }

    // Update state with updated array
    setFormData((prev) => ({
      ...prev,
      amenities: updatedAmenities,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { weekly, monthly, nightly } = formData.rates;

    if (!weekly && !monthly && !nightly) {
      toast.error('Please fill in at least one rate.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(e.target);

      const res = await fetch(`/api/properties/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (res.status === 200) {
        // Redirect to property page
        router.push(`/properties/${id}`);
      } else if (res.status === 401 || res.status === 404) {
        toast.error(res.statusText);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return !mounted ? (
    <Spinner />
  ) : (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Edit Property</h2>

      <div className={styles.row}>
        <label htmlFor="type">Property Type*</label>
        <select
          id="type"
          name="type"
          required
          value={formData.type}
          onChange={handleChange}
        >
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
      <div className={styles.row}>
        <label>Listing Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="eg. Spacious 2 bedroom Apartment"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="6"
          placeholder="Add a description of your property"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className={`${styles.row} ${styles.location}`}>
        <label>Location*</label>
        <input
          type="text"
          id="street"
          name="location.street"
          placeholder="Street"
          value={formData.location.street}
          onChange={handleChange}
        />
        <input
          type="text"
          id="town"
          name="location.town"
          placeholder="Town"
          required
          value={formData.location.town}
          onChange={handleChange}
        />
        <input
          type="text"
          id="county"
          name="location.county"
          placeholder="County"
          required
          value={formData.location.county}
          onChange={handleChange}
        />
        <input
          type="text"
          id="postalcode"
          name="location.postalcode"
          placeholder="Postalcode"
          value={formData.location.postalcode}
          onChange={handleChange}
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
            value={formData.beds}
            onChange={handleChange}
          />
        </div>
        <div className={styles.col}>
          <label htmlFor="baths">Baths*</label>
          <input
            type="number"
            id="baths"
            name="baths"
            required
            value={formData.baths}
            onChange={handleChange}
          />
        </div>
        <div className={styles.col}>
          <label htmlFor="square_feet">Square Feet*</label>
          <input
            type="number"
            id="square_feet"
            name="square_feet"
            required
            value={formData.square_feet}
            onChange={handleChange}
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
              checked={formData.amenities.includes('Wifi')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_wifi">Wifi</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_kitchen"
              name="amenities"
              value="Full Kitchen"
              checked={formData.amenities.includes('Full Kitchen')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_kitchen">Full Kitchen</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_washer_dryer"
              name="amenities"
              value="Washer & Dryer"
              checked={formData.amenities.includes('Washer & Dryer')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_washer_dryer">Washer & Dryer</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_free_parking"
              name="amenities"
              value="Free Parking"
              checked={formData.amenities.includes('Free Parking')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_free_parking">Free Parking</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_pool"
              name="amenities"
              value="Swimming Pool"
              checked={formData.amenities.includes('Swimming Pool')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_pool">Swimming Pool</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_playground"
              name="amenities"
              value="Playground"
              checked={formData.amenities.includes('Playground')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_hot_tub">Playground</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_24_7_security"
              name="amenities"
              value="24/7 Security"
              checked={formData.amenities.includes('24/7 Security')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_24_7_security">24/7 Security</label>
          </div>

          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_elevator_access"
              name="amenities"
              value="Elevator Access"
              checked={formData.amenities.includes('Elevator Access')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_elevator_access">Elevator Access</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_dishwasher"
              name="amenities"
              value="Dishwasher"
              checked={formData.amenities.includes('Dishwasher')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_dishwasher">Dishwasher</label>
          </div>

          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_air_conditioning"
              name="amenities"
              value="Air Conditioning"
              checked={formData.amenities.includes('Air Conditioning')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_air_conditioning">Air Conditioning</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_balcony_patio"
              name="amenities"
              value="Balcony/Patio"
              checked={formData.amenities.includes('Balcony/Patio')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_balcony_patio">Balcony/Patio</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_furniture"
              name="amenities"
              value="Furniture"
              checked={formData.amenities.includes('Furniture')}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_furniture">Furniture</label>
          </div>
          <div className={styles.amenity}>
            <input
              type="checkbox"
              id="amenity_gym_fitness_center"
              name="amenities"
              value="Gym/Fitness Center"
              checked={formData.amenities.includes('Gym/Fitness Center')}
              onChange={handleAmenitiesChange}
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
              checked={formData.amenities.includes('Wheelchair Accessible')}
              onChange={handleAmenitiesChange}
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
              checked={formData.amenities.includes('Garbage Collection')}
              onChange={handleAmenitiesChange}
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
              value={formData.rates.weekly}
              onChange={handleChange}
            />
          </div>
          <div className={styles.rate}>
            <label htmlFor="monthly_rate">Monthly</label>
            <input
              type="number"
              id="monthly_rate"
              name="rates.monthly"
              value={formData.rates.monthly}
              onChange={handleChange}
            />
          </div>
          <div className={styles.rate}>
            <label htmlFor="nightly_rate">Nightly</label>
            <input
              type="number"
              id="nightly_rate"
              name="rates.nightly"
              value={formData.rates.nightly}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <label htmlFor="seller_name">Seller's Name*</label>
        <input
          type="text"
          id="seller_name"
          name="seller_info.name"
          placeholder="Name"
          required
          value={formData.seller_info.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="seller_email">Seller's Email*</label>
        <input
          type="email"
          id="seller_email"
          name="seller_info.email"
          placeholder="Email address"
          required
          value={formData.seller_info.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="seller_phone">Seller's Phone</label>
        <input
          type="tel"
          id="seller_phone"
          name="seller_info.phone"
          placeholder="Phone"
          value={formData.seller_info.phone}
          onChange={handleChange}
        />
      </div>

      <div className={styles.bigBtn}>
        <button
          className={`btn ${styles.btn}`}
          type="submit"
          disabled={loading}
        >
          {loading ? <Bubbles /> : 'Edit Property'}
        </button>
      </div>
    </form>
  );
}
