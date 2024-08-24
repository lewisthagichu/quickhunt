'use client';
import styles from './sidebar.module.scss';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { segments } from '../data';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';

function Sidebar({ isOpen, toggleSidebar }) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <aside className={`${styles.aside} ${isOpen ? styles.open : ''}`}>
        <div onClick={toggleSidebar} className={styles.close}>
          <IoMdClose />
        </div>

        <div className={styles.links}>
          <div className={styles.menu}>
            <span onMouseEnter={handleMouseEnter}>MENU</span>
          </div>
          <ul>
            <li>
              <Link onClick={toggleSidebar} href="/">
                <span
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`${styles.notif} ${
                    pathname === segments.home && !isHovered
                      ? styles.active
                      : ''
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`${styles.sub} ${active ? styles.active : ''}`}
            >
              <div onClick={toggleActive} className={styles.link}>
                <span
                  className={`${styles.notif} ${
                    segments.properties.test(pathname) && !isHovered
                      ? styles.active
                      : ''
                  }`}
                >
                  Properties
                </span>
              </div>
              <span onClick={toggleActive}></span>

              {active && (
                <div className={styles.subMenu}>
                  <ul>
                    <li>
                      <Link onClick={toggleSidebar} href="/properties/add">
                        Add Property
                      </Link>
                    </li>
                    <li>
                      <Link onClick={toggleSidebar} href="/properties">
                        View Properties
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link onClick={toggleSidebar} href="/about-us">
                <span
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`${styles.notif} ${
                    pathname === segments.about && !isHovered
                      ? styles.active
                      : ''
                  }`}
                >
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <Link onClick={toggleSidebar} href="/contact">
                <span
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
      </aside>

      <div
        onClick={toggleSidebar}
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      ></div>
    </>
  );
}

export default Sidebar;
