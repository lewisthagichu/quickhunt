import styles from './dropDownMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import profileDefault from '@/public/images/profile.png';

function DropDownMenu({ setIsProfileOpen }) {
  return (
    <div
      id="user-menu"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex="-1"
      className={styles.container}
    >
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <Image src={profileDefault} fill alt="profile image" />
        </div>
        <div className={styles.content}>
          <p>Lewis</p>
        </div>
      </div>

      <ul className={styles.links}>
        <li>
          <Link
            onClick={() => {
              setIsProfileOpen(false);
            }}
            href="/profile"
            className={styles.btn}
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-0"
          >
            <small>View Profile</small>
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsProfileOpen(false);
            }}
            href="/properties/add"
            className={styles.btn}
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-1"
          >
            <small>Add Property</small>
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              setIsProfileOpen(false);
              //   signOut();
            }}
            className={styles.btn}
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-2"
          >
            <small>Sign Out</small>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
