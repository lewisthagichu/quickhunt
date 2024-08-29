'use client';
import { inter } from '@/public/font/font';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/fetchProperties';
import PropertyHero from '@/components/SingleProperty/PropertyHero/PropertyHero';
import PropertyDetails from '@/components/SingleProperty/PropertyDetails/PropertyDetails';
import SimilarProperties from '@/components/SingleProperty/SimilarProperties/SimilarProperties';
import BigBtn from '@/components/Common/BigBtn/BigBtn';
import Footer from '@/components/Common/Footer/Footer';
import PlaceholderCards from '@/components/Common/PlaceholderCards/PlaceholderCards';
import Spinner from '@/components/Spinner';

function PropertyPage() {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getProperty = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);

        setProperty(property);
      } catch (error) {
        console.error('Error fetching property: ', error);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      getProperty();
    }
  }, [id, property]);

  const noPropertyFound = !property && !loading;
  return loading ? (
    <Spinner />
  ) : (
    <div className={inter.className}>
      {noPropertyFound ? (
        <div className="container">
          <PlaceholderCards
            heading="No listing found"
            cta="Something went wrong. Explore other properties."
            link="/properties"
            linkText="View all Properties"
            divStyle="no-property-found-card"
          />
          <Footer />
        </div>
      ) : (
        <>
          <PropertyHero property={property} />
          <PropertyDetails property={property} />
          <SimilarProperties property={property} />
          <BigBtn />
          <Footer />
        </>
      )}
    </div>
  );
}

export default PropertyPage;
