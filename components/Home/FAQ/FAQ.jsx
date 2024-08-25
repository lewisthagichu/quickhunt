import styles from './faq.module.scss';
import AccordionItem from './AccordionItem/AccordionItem';
import { faqs } from './data';

function FAQ() {
  return (
    <section id="faq" className={styles.container}>
      <h2>Frequently asked questions</h2>
      <div className={styles.accordion}>
        {faqs.map((faq, i) => (
          <AccordionItem key={`a_${i}`} faq={faq} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
