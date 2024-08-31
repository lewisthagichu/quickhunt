import './globals.css';
import 'photoswipe/dist/photoswipe.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from 'react-toastify';
import { GlobalContextProvider } from '@/context/GlobalContext';
import getServerUser from '@/lib/getSessionUser';
import AuthProvider from '@/context/AuthProvider';
import Header from '@/components/Common/Header/Header';

export const metadata = {
  title: 'QuickHunt',
  description:
    'A platform designed to streamline the process of finding rental properties. Developed by Lewis Thagichu',
};

export default async function RootLayout({ children }) {
  const session = await getServerUser();
  return (
    <GlobalContextProvider>
      <AuthProvider session={session}>
        <html lang="en">
          <body>
            <Header />
            <main>{children}</main>
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalContextProvider>
  );
}
