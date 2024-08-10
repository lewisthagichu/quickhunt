import Hero from '@/components/Home/Hero/Hero';
import PopularProperties from '@/components/Home/PopularProperties/PopularProperties';
import RecentProperties from '@/components/Home/RecentProperties/RecentProperties';

export default function Home() {
  return (
    <>
      <Hero />
      <PopularProperties />
      <RecentProperties />
    </>
  );
}
