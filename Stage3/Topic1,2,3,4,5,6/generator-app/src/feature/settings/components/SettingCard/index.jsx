import styles from './SettingCard.module.css';

const SettingCard = ({ title, children }) => (
  <div className={styles.card}>
    {title && <p className={styles.title}>{title}</p>}
    <div className={styles.body}>{children}</div>
  </div>
);

export default SettingCard;
