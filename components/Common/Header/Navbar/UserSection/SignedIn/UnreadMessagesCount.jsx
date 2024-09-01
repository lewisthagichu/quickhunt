'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useGlobalContext } from '@/context/GlobalContext';

function UnreadMessagesCount({ styles }) {
  const { data: session } = useSession();
  const { unreadCount, setUnreadCount } = useGlobalContext();

  useEffect(() => {
    if (!session) return;

    const fetchUnreadMessagesCount = async () => {
      try {
        const res = await fetch('/api/messages/unread');

        if (res.status === 200) {
          const count = await res.json();
          setUnreadCount(count);
        }
      } catch (error) {}
    };

    fetchUnreadMessagesCount();
  }, [session]);

  return unreadCount > 0 ? <span className={styles}>{unreadCount}</span> : null;
}

export default UnreadMessagesCount;
