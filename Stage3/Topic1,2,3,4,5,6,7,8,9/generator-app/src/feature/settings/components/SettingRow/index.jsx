import styles from './SettingRow.module.css';

const SettingRow = ({ label, description, children, border = true }) => (
  <div className={`${styles.row} ${border ? styles.border : ''}`}>
    <div className={styles.info}>
      <span className={styles.label}>{label}</span>
      {description && <span className={styles.description}>{description}</span>}
    </div>
    <div className={styles.control}>{children}</div>
  </div>
);

export default SettingRow;
