'use client';
import styles from './messages.module.scss';
import { useState, useEffect } from 'react';
import NoMessages from './NoMessages/NoMessages';
import AllMessages from './AllMessages/AllMessages';
import Chat from './IndividualMessages/Chat';
import ClosedChat from './ClosedChat/ClosedChat';

function Messages({ messages, setMessages }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMsg, setSelectedMsg] = useState(null);

  useEffect(() => {}, [isOpen, messages]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <AllMessages
          openChat={handleOpen}
          messages={messages}
          setSelectedMsg={setSelectedMsg}
          setIsDeleted={setIsDeleted}
        />
        {isOpen && (
          <Chat
            closeChat={handleClose}
            isOpen={isOpen}
            messages={messages}
            selectedMsg={selectedMsg}
            setIsDeleted={setIsDeleted}
            isDeleted={isDeleted}
            setMessages={setMessages}
          />
        )}
        {!isOpen && <ClosedChat />}
        {/* {isDeleted && <ClosedChat />} */}
      </div>
    </section>
  );
}

export default Messages;
