import styles from './placeholderCards.module.scss';
import FirstEmptyCard from './FirstEmptyCard/FirstEmptyCard';
import EmptyCard from './EmptyCard/EmptyCard';

const PlaceholderCards = ({ heading, cta, link, linkText }) => {
  const emptyCards = Array(5).fill(null);

  return (
    <div className={styles.cards}>
      <div className={styles.item}>
        <FirstEmptyCard
          heading={heading}
          cta={cta}
          link={link}
          linkText={linkText}
        />
      </div>
      {emptyCards.map((_, index) => (
        <div key={index} className={`${styles.item} ${styles.empty}`}>
          <EmptyCard />
        </div>
      ))}
    </div>
  );
};

export default PlaceholderCards;
