'use client';
import styles from './header.module.scss';
import { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoIosNotifications, IoMdPerson, IoIosMenu } from 'react-icons/io';
import Sidebar from './Sidebar/Sidebar';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.container}>
      <div className={styles.nav}>
        <div onClick={toggleSidebar} className={`${styles.burger}`}>
          <IoIosMenu />
        </div>

        <div className={styles.logo}>
          <h1>FindNest</h1>
        </div>

        <div className={styles.signup}>
          <IoIosNotifications />
          <AiOutlineMessage />
          <IoMdPerson />
        </div>
      </div>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
}

export default Navbar;
