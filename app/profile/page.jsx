import { redirect } from 'next/navigation';

function ProfilePage() {
  return redirect('/profile/listings');
}

export default ProfilePage;
