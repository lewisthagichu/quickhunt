'use client';
import styles from './allMessages.module.scss';

import MessageCard from '../MessageCard/MessageCard';

export default function AllMessages({
  openChat,
  messages,
  setSelectedMsg,
  setIsDeleted,
}) {
  return (
    <div className={styles.container}>
      <h2>Messages</h2>

      {messages.map((message, i) => (
        <MessageCard
          key={i}
          openChat={openChat}
          message={message}
          setSelectedMsg={setSelectedMsg}
          setIsDeleted={setIsDeleted}
        />
      ))}
    </div>
  );
}
