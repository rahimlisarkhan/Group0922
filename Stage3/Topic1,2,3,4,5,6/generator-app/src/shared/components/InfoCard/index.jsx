import styles from './InfoCard.module.css';

const InfoCard = ({ title, children }) => (
  <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.body}>{children}</div>
  </div>
);

export default InfoCard;
