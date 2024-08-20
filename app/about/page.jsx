import { inter } from '@/public/font/font';
import AboutHero from '@/components/About/AboutHero/AboutHero';
import Mission from '@/components/About/Mission/Mission';
import Footer from '@/components/Common/Footer/Footer';

const AboutPage = () => {
  return (
    <div className={inter.className}>
      <AboutHero />
      <Mission />
      <Footer />
    </div>
  );
};

export default AboutPage;
