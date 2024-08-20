import { inter } from '@/public/font/font';
import AboutHero from '@/components/About/AboutHero/AboutHero';
import Mission from '@/components/About/Mission/Mission';
import Values from '@/components/About/Values/Values';
import Testimonials from '@/components/About/Testimonials/Testimonials';
import Footer from '@/components/Common/Footer/Footer';

const AboutPage = () => {
  return (
    <div className={inter.className}>
      <AboutHero />
      <Mission />
      <Values />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AboutPage;
