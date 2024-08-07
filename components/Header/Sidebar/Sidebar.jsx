import Link from 'next/link';
import styles from './sidebar.module.scss';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

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
              <Link href="#">Home</Link>
            </li>
            <li className={`${styles.sub} ${active ? styles.active : ''}`}>
              <Link href="#">Properties</Link>
              <span onClick={toggleActive}></span>

              <div className={styles.subMenu}>
                <ul>
                  <li>
                    <Link href="#">Add Property</Link>
                  </li>
                  <li>
                    <Link href="#">View Properties</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
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
