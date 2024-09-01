'use client';
import styles from './noMessages.module.scss';
import { TbMessageCircleX } from 'react-icons/tb';

function NoMessages() {
  return (
    <div className={styles.container}>
      <h1>Messages</h1>
      <div className={styles.content}>
        <TbMessageCircleX />
        <h2>Nothing here</h2>
        <p>There are no messages received yet.</p>
      </div>
    </div>
  );
}

export default NoMessages;
