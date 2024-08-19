import { inter } from '@/public/font/font';
import Hero from '@/components/Home/Hero/Hero';
import Propositon from '@/components/Home/Proposition/Propositon';
import PopularProperties from '@/components/Home/PopularProperties/PopularProperties';
import RecentProperties from '@/components/Home/RecentProperties/RecentProperties';
import Footer from '@/components/Common/Footer/Footer';
import FAQ from '@/components/Home/FAQ/FAQ';

export default function Home() {
  return (
    <div className={inter.className}>
      <Hero />
      <Propositon />
      <PopularProperties />
      <RecentProperties />
      <FAQ />
      <Footer />
    </div>
  );
}
