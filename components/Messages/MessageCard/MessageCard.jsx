'use client';
import styles from './messageCard.module.scss';
import { useState } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';
import Image from 'next/image';
import profileDefault from '@/public/images/profile.png';

export default function MessageCard({
  openChat,
  isDeleted,
  message,
  setSelectedMsg,
  setIsDeleted,
}) {
  const [isRead, setIsRead] = useState(false);
  const { setUnreadCount } = useGlobalContext();
  const messageDate = new Date(message.createdAt);
  const formattedDate = messageDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  });

  const handleOpenChat = async (messageID) => {
    setSelectedMsg(messageID);
    setIsDeleted(false);
    openChat();

    // if (message.read) return;

    // try {
    //     const res = await fetch(`/api/messages/${messageID}`, {
    //       method: 'PUT',
    //     });

    //     if (res.status === 200) {
    //       setIsRead(true);
    // setUnreadCount((prevCount) => prevCount - 1);
    //     } else {
    //       toast.error('Something went wrong');
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     toast.error('Something went wrong');
    // }
  };

  if (isDeleted) return null;

  return (
    <div onClick={() => handleOpenChat(message._id)} className={styles.card}>
      <div className={styles.avatar}>
        <Image
          src={message.sender.image || profileDefault}
          fill
          alt="profile photo"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <h4>{message.sender.username}</h4>
          <small>{formattedDate}</small>
        </div>
        <div className={styles.middle}>
          <h5 className={styles.name}>{message.property.name}</h5>
          {!isRead && (
            <small>
              <span className={styles.read}>New</span>
            </small>
          )}
        </div>
        <p>{message.body}</p>
      </div>
    </div>
  );
}
