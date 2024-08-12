import Hero from '@/components/Home/Hero/Hero';
import PopularProperties from '@/components/Home/PopularProperties/PopularProperties';
import RecentProperties from '@/components/Home/RecentProperties/RecentProperties';
import { inter } from '@/public/font/font';

export default function Home() {
  return (
    <div className={inter.className}>
      <Hero />
      <PopularProperties />
      <RecentProperties />
    </div>
  );
}
