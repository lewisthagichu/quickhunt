import React from 'react';
import { inter } from '@/public/font/font';
import PropertiesHero from '@/components/Properties/PropertiesHero/PropertiesHero';
import PropertiesWrapper from '@/components/Properties/Wrapper/PropertiesWrapper';
import Footer from '@/components/Common/Footer/Footer';

function PropertiesPage() {
  return (
    <div className={inter.className}>
      <PropertiesHero />
      <PropertiesWrapper />
      <Footer />
    </div>
  );
}

export default PropertiesPage;
