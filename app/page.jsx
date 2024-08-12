import { inter } from '@/public/font/font';
import Hero from '@/components/Home/Hero/Hero';
import PopularProperties from '@/components/Home/PopularProperties/PopularProperties';
import RecentProperties from '@/components/Home/RecentProperties/RecentProperties';
import Footer from '@/components/Common/Footer/Footer';

export default function Home() {
  return (
    <div className={inter.className}>
      <Hero />
      <PopularProperties />
      <RecentProperties />
      <Footer />
    </div>
  );
}
