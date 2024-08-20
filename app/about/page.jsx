import AboutHero from '@/components/About/AboutHero/AboutHero';
import Footer from '@/components/Common/Footer/Footer';
import { inter } from '@/public/font/font';

const AboutPage = () => {
  return (
    <div className={inter.className}>
      <AboutHero />
      <Footer />
    </div>
  );
};

export default AboutPage;
