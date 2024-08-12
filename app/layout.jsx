import Footer from '@/components/Common/Footer/Footer';
import './globals.css';
import Header from '@/components/Common/Header/Header';

export const metadata = {
  title: 'HappyHome',
  description:
    'A platform designed to streamline the process of finding rental properties. Developed by Lewis Thagichu',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
