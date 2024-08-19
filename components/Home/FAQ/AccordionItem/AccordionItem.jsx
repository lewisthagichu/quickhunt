'use client';
import styles from './accordionItem.module.scss';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function AccordionItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <p className={styles.question}>{faq.question}</p>
        <div onClick={toggleOpen} className={styles.caret}>
          <IoIosArrowDown />
        </div>
      </div>

      <div className={`${styles.bottom} ${isOpen ? styles.active : ''}`}>
        <p className={styles.answer}>{faq.answer}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
