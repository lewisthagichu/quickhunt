import { inter } from '@/public/font/font';
import PropertyHero from '@/components/SingleProperty/PropertyHero/PropertyHero';
import PropertyDetails from '@/components/SingleProperty/PropertyDetails/PropertyDetails';

function PropertyPage() {
  return (
    <div className={inter.className}>
      <PropertyHero />
      <PropertyDetails />
    </div>
  );
}

export default PropertyPage;
