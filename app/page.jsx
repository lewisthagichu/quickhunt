import { inter } from '@/public/font/font';
import Hero from '@/components/Home/Hero/Hero';
import Propositon from '@/components/Home/Proposition/Propositon';
import CTA from '@/components/Home/CTA/CTA';
import PopularProperties from '@/components/Home/PopularProperties/PopularProperties';
import RecentProperties from '@/components/Home/RecentProperties/RecentProperties';
import BigBtn from '@/components/Common/BigBtn/BigBtn';
import FAQ from '@/components/Home/FAQ/FAQ';
import Footer from '@/components/Common/Footer/Footer';

export default function Home() {
  return (
    <div className={inter.className}>
      <Hero />
      <Propositon />
      <CTA />
      <PopularProperties />
      <RecentProperties />
      <BigBtn />
      <FAQ />
      <Footer />
    </div>
  );
}
