'use client';
import styles from './propertyContactForm.module.scss';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import Bubbles from '@/components/Common/Bubbles/Bubbles';

export default function PropertyContactForm({ property }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) {
      toast.error('You need to sign in to send a message');
      return;
    }

    const messageData = {
      recipient: property.owner,
      property: property._id,
      name,
      email,
      phone,
      message,
    };

    setLoading(true);

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });
      const { message } = await res.json();

      if (res.status === 200) {
        toast.success(message);
      } else if (res.status === 400 || res.status === 401) {
        toast.error(message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.row}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="message">Message*</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Your message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <div className={styles.bigBtn}>
        <button className={`btn ${styles.btn}`} type="submit">
          {loading ? <Bubbles /> : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
