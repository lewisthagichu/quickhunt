import { inter } from '@/public/font/font';
import AddProperty from '@/components/AddProperty/AddProperty';
import Footer from '@/components/Common/Footer/Footer';

function AddPropertyPage() {
  return (
    <div className={inter.className}>
      <AddProperty />
      <Footer />
    </div>
  );
}

export default AddPropertyPage;
