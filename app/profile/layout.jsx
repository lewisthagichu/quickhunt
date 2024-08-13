import MastHead from '@/components/Profile/MastHead/MastHead';
import Footer from '@/components/Common/Footer/Footer';

function ProfileLayout({ children }) {
  return (
    <>
      <MastHead />
      {children}
      <Footer />
    </>
  );
}

export default ProfileLayout;
