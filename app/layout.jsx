import './globals.css';
import Header from '@/components/Common/Header/Header';
import { GlobalContextProvider } from '@/context/GlobalContext';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
  title: 'QuickHunt',
  description:
    'A platform designed to streamline the process of finding rental properties. Developed by Lewis Thagichu',
};

export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </GlobalContextProvider>
  );
}
