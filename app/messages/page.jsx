'use client';
import { inter } from '@/public/font/font';
import { useState, useEffect } from 'react';
import Messages from '@/components/Messages/Messages';
import Spinner from '@/components/Spinner/Spinner';
import NoMessages from '@/components/Messages/NoMessages/NoMessages';

export default function MessagePage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch('/api/messages');

        if (res.status === 200) {
          const data = await res.json();
          setMessages(data);
        }
      } catch (error) {
        console.log('Error fetching messages: ', error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className={inter.className}>
      {messages.length ? (
        <Messages messages={messages} setMessages={setMessages} />
      ) : (
        <NoMessages />
      )}
    </div>
  );
}
