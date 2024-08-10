import Hero from '@/components/Home/Hero/Hero';
import PopularProperties from '@/components/Home/PopularProperties/PopularProperties';
import RecentProperties from '@/components/Home/RecentProperties/RecentProperties';
import Footer from '@/components/Common/Footer/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <PopularProperties />
      <RecentProperties />
      <Footer />
    </>
  );
}
