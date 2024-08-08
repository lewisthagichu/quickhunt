import './globals.css';
import Header from '@/components/Header/Header';
import { inter } from '@/public/font/font';

export const metadata = {
  title: 'HappyHome',
  description:
    'A platform designed to streamline the process of finding rental properties. Developed by Lewis Thagichu',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
