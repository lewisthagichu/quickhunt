'use client';
import styles from './navbar.module.scss';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoMdPerson, IoIosMenu } from 'react-icons/io';
import Logo from './Logo';

function Navbar({ toggleSidebar }) {
  return (
    <div className={styles.nav}>
      <div onClick={toggleSidebar} className={`${styles.burger}`}>
        <IoIosMenu />
      </div>

      <Logo />

      <div className={styles.right}>
        <AiOutlineMessage />
        <IoMdPerson />
      </div>
    </div>
  );
}

export default Navbar;
