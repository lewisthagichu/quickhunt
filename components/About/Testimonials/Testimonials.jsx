import Image from 'next/image';
import styles from './Testimonials.module.scss';
import profileDefault from '@/public/images/profile.png';
import { FaStar } from 'react-icons/fa';
import { ratingsCount, testimonials } from './data';

const Avatar = ({ name, title }) => (
  <div className={styles.avatar}>
    <div className={styles.imageContainer}>
      <Image src={profileDefault} fill alt="profile image" />
    </div>
    <div className={styles.title}>
      <h5>{name}</h5>
      <small>{title}</small>
    </div>
  </div>
);

const Ratings = () => (
  <div className={styles.ratings}>
    {Array.from({ length: ratingsCount }).map((_, i) => (
      <div key={`s_${i}`}>
        <FaStar />
      </div>
    ))}
  </div>
);

const TestimonialCard = ({ name, title, content, date }) => (
  <div className={styles.marqueeCard}>
    <Avatar name={name} title={title} />
    <div className={styles.content}>
      <Ratings />
      <small>{content}</small>
      <small className={styles.date}>{date}</small>
    </div>
  </div>
);

const MarqueeContent = () => (
  <div className={styles.marqueeContent}>
    {testimonials.map((testimonial, i) => (
      <TestimonialCard key={`i_${i}`} {...testimonial} />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className={styles.container}>
      <h2 className={styles.headline}>Testimonials</h2>
      <div className={styles.marqueeBox}>
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
}
