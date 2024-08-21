import { inter } from '@/public/font/font';
import AboutHero from '@/components/About/AboutHero/AboutHero';
import Mission from '@/components/About/Mission/Mission';
import Values from '@/components/About/Values/Values';
import Testimonials from '@/components/About/Testimonials/Testimonials';
import CallToAction from '@/components/About/CallToAction/CallToAction';
import Footer from '@/components/Common/Footer/Footer';
import WhyUs from '@/components/About/WhyUs/WhyUs';

const AboutPage = () => {
  return (
    <div className={inter.className}>
      <AboutHero />
      <Mission />
      <WhyUs />
      <Values />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default AboutPage;
