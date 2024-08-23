import { inter } from '@/public/font/font';
import PropertyHero from '@/components/SingleProperty/PropertyHero/PropertyHero';
import PropertyDetails from '@/components/SingleProperty/PropertyDetails/PropertyDetails';
import SimilarProperties from '@/components/SingleProperty/SimilarProperties/SimilarProperties';
import BigBtn from '@/components/Common/BigBtn/BigBtn';
import Footer from '@/components/Common/Footer/Footer';

function PropertyPage() {
  return (
    <div className={inter.className}>
      <PropertyHero />
      <PropertyDetails />
      <SimilarProperties />
      <BigBtn />
      <Footer />
    </div>
  );
}

export default PropertyPage;
