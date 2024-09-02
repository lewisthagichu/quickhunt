import './globals.css';
import 'photoswipe/dist/photoswipe.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from 'react-toastify';
import { GlobalContextProvider } from '@/context/GlobalContext';
import { Suspense } from 'react';
import AuthProvider from '@/context/AuthProvider';
import Header from '@/components/Common/Header/Header';

export const metadata = {
  title: 'QuickHunt',
  description:
    'A platform designed to streamline the process of finding rental properties. Developed by Lewis Thagichu',
};

export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <Suspense>
              <Header />
              <main>{children}</main>
            </Suspense>
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalContextProvider>
  );
}
