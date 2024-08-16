import { inter } from '@/public/font/font';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Common/Footer/Footer';

function ContactPage() {
  return (
    <div className={inter.className}>
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;
