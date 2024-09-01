import styles from './closedChat.module.scss';
export default function ClosedChat() {
  return (
    <div className={styles.container}>
      <div>No message selected. Click on a message to view.</div>
    </div>
  );
}
