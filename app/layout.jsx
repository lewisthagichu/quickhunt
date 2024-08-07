import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header/Header';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'HappyHome',
  description:
    'A platform designed to streamline the process of finding rental properties. Developed by Lewis Thagichu',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
