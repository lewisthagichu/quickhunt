'use client';
import styles from './chat.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import profileDefault from '@/public/images/profile.png';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useGlobalContext } from '@/context/GlobalContext';
import { MdDeleteOutline } from 'react-icons/md';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { formatTime, formatDate } from '@/utils/formatCreatedAt';
import ClosedChat from '../ClosedChat/ClosedChat';

export default function Chat({
  closeChat,
  isOpen,
  messages,
  selectedMsg,
  setIsDeleted,
  isDeleted,
  setMessages,
}) {
  const [message, setMessage] = useState(null);
  const { setUnreadCount } = useGlobalContext();
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    const foundMessage = messages.find((msg) => msg._id === selectedMsg);
    setMessage(foundMessage);
    setIsRead(foundMessage?.read || false);
  }, [selectedMsg, messages]);

  useEffect(() => {}, [isDeleted]);

  const handleDeleteClick = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this message?'
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        setUnreadCount((prevCount) => (isRead ? prevCount : prevCount - 1));
        setMessages((msgs) => msgs.filter((msg) => msg._id !== message._id));
        setIsDeleted(true);

        toast.success('Message deleted successfully');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  if (!message) return null;
  if (isDeleted) return <ClosedChat />;

  const date = formatDate(message.createdAt);
  const messageTime = formatTime(message.createdAt);
  const propertyLink = message?.property
    ? `/properties/${message.property._id}`
    : '#';

  return (
    <div className={`${styles.container} ${isOpen && styles.open}`}>
      <div>
        <div className={styles.header}>
          <div className={styles.icons}>
            <div onClick={closeChat}>
              <FaLongArrowAltLeft className={styles.back} />
            </div>
            <div onClick={handleDeleteClick}>
              <MdDeleteOutline className={styles.delete} />
            </div>
          </div>
          <div className={styles.buyerDetails}>
            <div className={styles.left}>
              <div className={styles.avatar}>
                <Image src={profileDefault} fill alt="profile photo" />
              </div>
              <div className={styles.contact}>
                <h4>{message.sender.username}</h4>
                <small>{message.sender.email}</small>
              </div>
            </div>
            <div className={styles.right}>
              <small className={styles.date}>{date}</small>
              <small className={styles.time}>{messageTime}</small>
            </div>
          </div>
        </div>
        <div className={styles.message}>
          <h3 className={styles.top}>
            <span>Property: </span>
            {message.property.name}
          </h3>

          <p className={styles.middle}>{message.body}</p>

          <div className={styles.bottom}>
            {message.phone && (
              <p>
                You can contact me at: <strong>{message.phone}</strong>
              </p>
            )}
          </div>
        </div>
      </div>
      <Link className={`btn ${styles.btn}`} href={propertyLink}>
        View Property
      </Link>
    </div>
  );
}
