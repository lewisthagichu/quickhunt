import { inter } from '@/public/font/font';
import EditProperty from '@/components/EditProperty/EditProperty';
import Footer from '@/components/Common/Footer/Footer';

export default function EditPropertyPage() {
  return (
    <div className={inter.className}>
      <EditProperty />
      <Footer />
    </div>
  );
}
