import './globals.css';
import 'photoswipe/dist/photoswipe.css';
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
          </body>
        </html>
      </AuthProvider>
    </GlobalContextProvider>
  );
}
