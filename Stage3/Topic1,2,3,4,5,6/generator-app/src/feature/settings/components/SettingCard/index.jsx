import styles from './SettingCard.module.css';

const SettingCard = ({ title, children }) => (
  <div className={styles.card}>
    {title && <h3 className={styles.title}>{title}</h3>}
    <div className={styles.body}>{children}</div>
  </div>
);

export default SettingCard;
