'use client';
import styles from './header.module.scss';
import { inter } from '@/public/font/font';
import { useState, useEffect } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { headerStyle } = useGlobalContext();
  const { background, color } = headerStyle;

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {}, [headerStyle]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="header"
      style={{ background, color }}
      className={`${styles.container} ${inter.className}`}
    >
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
}

export default Header;
