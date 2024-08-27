import styles from './signedIn.module.scss';
import { useState } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';
import { IoMdArrowDropdown, IoIosNotificationsOutline } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import profileDefault from '@/public/images/profile.png';
import DropDownMenu from '../../../DropDownMenu/DropDownMenu';

export default function SignedIn() {
  const { headerStyle } = useGlobalContext();
  const { color } = headerStyle;

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className={styles.signedIn}>
      <Link href="/messages" className={styles.messages}>
        <div style={{ color }} type="button" className={styles.notificationBtn}>
          <IoIosNotificationsOutline />
        </div>
        {/* <UnreadMessagesCount loading={loading} /> */}
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
        {isProfileOpen && <DropDownMenu setIsProfileOpen={setIsProfileOpen} />}

        {isProfileOpen && (
          <div
            className={styles.overlay}
            onClick={() => setIsProfileOpen(false)}
          ></div>
        )}
      </div>
    </div>
  );
}
