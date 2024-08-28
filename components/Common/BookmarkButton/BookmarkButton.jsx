'use client';
import styles from './bookmarkButton.module.scss';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function BookmarkButton({ property }) {
  const { data: session } = useSession();
  const userID = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userID) {
      setLoading(false);
      return;
    }

    const checkBookmarkStatus = async () => {
      try {
        const res = await fetch('/api/bookmarks/check', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            propertyID: property._id,
          }),
        });

        if (res.status === 200) {
          const data = await res.json();
          setIsBookmarked(data.isBookmarked);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    checkBookmarkStatus();
  }, [property._id, userID]);

  const handleClick = async () => {
    if (!userID) {
      toast.error('You need to sign in to bookmark a property');
      return;
    }

    try {
      const res = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyID: property._id,
        }),
      });

      if (res.status === 200) {
        const { isBookmarked, message } = await res.json();
        toast.success(message);
        setIsBookmarked(isBookmarked);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>...</p>;
  }

  return isBookmarked ? (
    <button
      disabled={loading}
      onClick={handleClick}
      className={`${styles.bookmarkBtn} ${styles.bookmarked}`}
    >
      <FaHeart />
    </button>
  ) : (
    <button
      disabled={loading}
      onClick={handleClick}
      className={styles.bookmarkBtn}
    >
      <FaHeart />
    </button>
  );
}
