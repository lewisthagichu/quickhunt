import { inter } from '@/public/font/font';
import PropertiesHero from '@/components/Properties/PropertiesHero/PropertiesHero';
import SearchResults from '@/components/Common/SearchResults/SearchResults';
import Footer from '@/components/Common/Footer/Footer';

function SearchResultsPage() {
  return (
    <div className={inter.className}>
      <PropertiesHero />
      <SearchResults />
      <Footer />
    </div>
  );
}

export default SearchResultsPage;
