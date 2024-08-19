import MastHead from '@/components/Profile/MastHead/MastHead';
import Footer from '@/components/Common/Footer/Footer';

export default function ProfileLayout({ children }) {
  return (
    <>
      <MastHead />
      {children}
      <Footer />
    </>
  );
}
