'use client';
import styles from './sidebar.module.scss';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';

function Sidebar({ isOpen, toggleSidebar }) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <aside className={`${styles.aside} ${isOpen ? styles.open : ''}`}>
        <div onClick={toggleSidebar} className={styles.close}>
          <IoMdClose />
        </div>

        <div className={styles.links}>
          <div className={styles.menu}>
            <span>MENU</span>
          </div>
          <ul>
            <li>
              <Link onClick={toggleSidebar} href="/">
                Home
              </Link>
            </li>
            <li className={`${styles.sub} ${active ? styles.active : ''}`}>
              <div onClick={toggleActive} className={styles.link}>
                Properties
              </div>
              <span></span>

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
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={toggleSidebar} href="/contact">
                Contact
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
