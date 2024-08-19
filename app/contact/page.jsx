import { inter } from '@/public/font/font';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Common/Footer/Footer';

export default function ContactPage() {
  return (
    <div className={inter.className}>
      <Contact />
      <Footer />
    </div>
  );
}
