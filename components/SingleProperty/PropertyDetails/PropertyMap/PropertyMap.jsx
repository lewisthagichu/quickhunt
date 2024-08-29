'use client';
import styles from './propertyMap.module.scss';
import { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import Image from 'next/image';
import pin from '@/public/images/pin.svg';
import Radar from 'radar-sdk-js';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function PropertyMap({ property }) {
  const [loading, setLoading] = useState(true);
  const [geocodeError, setGeocodeError] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  useEffect(() => {
    Radar.initialize(process.env.NEXT_PUBLIC_RADAR_GEOCODING_API_KEY);

    const { street, town, county, zipcode } = property?.location || {};

    const fetchCoords = async () => {
      try {
        // Perform forward geocoding
        const result = await Radar.forwardGeocode({
          query: `${street} ${town} ${county} ${zipcode}`,
        });

        // Ensure result is valid
        if (result.addresses.length > 0) {
          const { latitude, longitude } = result.addresses[0];

          setCoordinates({ lat: latitude, lng: longitude });
        } else {
          setGeocodeError(true);
          console.error('No addresses found.');
        }
      } catch (error) {
        console.error('Geocoding failed:', error);
      } finally {
        setLoading(false);
      }
    };

    if (property.location) {
      fetchCoords();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className={styles.container}>Loading map...</div>;
  }

  if (geocodeError) {
    return (
      <div className={styles.container}>
        <h3>Map location</h3>
        <div className={styles.error}>No location data found</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3>Map location</h3>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapLib={import('mapbox-gl')}
        initialViewState={{
          longitude: coordinates.lng,
          latitude: coordinates.lat,
          zoom: 15,
        }}
        style={{ width: '100%', height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          latitude={coordinates.lat}
          longitude={coordinates.lng}
          anchor="top"
        >
          <Image src={pin} alt="Property location pin" width={40} height={40} />
        </Marker>
      </Map>
    </div>
  );
}
