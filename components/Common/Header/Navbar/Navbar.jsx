'use client';
import styles from './navbar.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useGlobalContext } from '@/context/GlobalContext';
import { segments } from '../data';
import { IoIosMenu, IoMdArrowDropdown } from 'react-icons/io';
import Link from 'next/link';
import Logo from './Logo/Logo';
import PropertiesDropDown from '../PropertiesDropDown/PropertiesDropDown';
import UserSection from './UserSection/UserSection';

function Navbar({ toggleSidebar }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

  const { headerStyle } = useGlobalContext();
  const { color } = headerStyle;

  const pathname = usePathname();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {}, [pathname]);

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <div onClick={toggleSidebar} className={styles.burger}>
          <IoIosMenu />
        </div>

        <ul className={styles.links}>
          <li>
            <Link href="/">
              <span
                style={{ color }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${styles.notif} ${
                  pathname === segments.home && !isHovered ? styles.active : ''
                }`}
              >
                Home
              </span>
            </Link>
          </li>

          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.properties}
          >
            <span
              className={`${styles.notif} ${
                segments.properties.test(pathname) && !isHovered
                  ? styles.active
                  : ''
              }`}
              onClick={() => setIsPropertiesOpen((prev) => !prev)}
            >
              Properties
            </span>

            <div
              onClick={() => setIsPropertiesOpen((prev) => !prev)}
              className={styles.arrow}
            >
              <IoMdArrowDropdown />
            </div>
            {isPropertiesOpen && (
              <PropertiesDropDown setIsPropertiesOpen={setIsPropertiesOpen} />
            )}
          </li>

          <li>
            <Link href="/about-us">
              <span
                style={{ color }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${styles.notif} ${
                  pathname === segments.about && !isHovered ? styles.active : ''
                }`}
              >
                About Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span
                style={{ color }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${styles.notif} ${
                  pathname === segments.contact && !isHovered
                    ? styles.active
                    : ''
                }`}
              >
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <Logo />
      <UserSection />

      {/* overlay */}
      {isPropertiesOpen && (
        <div
          onClick={() => {
            setIsPropertiesOpen(false);
          }}
          className={styles.overlay}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
