'use client';
import styles from './navbar.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useGlobalContext } from '@/context/GlobalContext';
import { segments } from '../data';
import { IoIosMenu, IoMdArrowDropdown } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo/Logo';
import profileDefault from '@/public/images/profile.png';
import PropertiesDropDown from '../PropertiesDropDown/PropertiesDropDown';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

function Navbar({ toggleSidebar }) {
  const pathname = usePathname();
  const { headerStyle, setHeaderStyle } = useGlobalContext();
  const { background, color } = headerStyle;

  const [isHovered, setIsHovered] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

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

      <div className={styles.right}>
        <Link href="/messages" className={styles.messages}>
          <div
            type="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${styles.notif} ${styles.btn} ${
              pathname === segments.messages && !isHovered ? styles.active : ''
            }`}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={color}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
          {/* <UnreadMessagesCount session={session} /> */}
        </Link>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            <button
              type="button"
              className={styles.btn}
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => setIsProfileOpen((prev) => !prev)}
            >
              <Image
                src={profileDefault}
                sizes="10vw"
                fill
                alt="profile avatar"
              />
            </button>

            <div
              className={styles.arrow}
              onClick={() => setIsProfileOpen((prev) => !prev)}
            >
              <IoMdArrowDropdown />
            </div>
          </div>
          {isProfileOpen && (
            <DropDownMenu setIsProfileOpen={setIsProfileOpen} />
          )}
        </div>
      </div>

      {/* overlays */}
      {isPropertiesOpen && (
        <div
          onClick={() => {
            setIsPropertiesOpen(false);
          }}
          className={styles.overlay}
        ></div>
      )}

      {isProfileOpen && (
        <div
          onClick={() => {
            setIsProfileOpen(false);
          }}
          className={styles.overlay}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
