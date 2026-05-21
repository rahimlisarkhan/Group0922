import styles from './Toggle.module.css';

const Toggle = ({ checked = false, onChange, disabled = false }) => (
  <label className={`${styles.track} ${checked ? styles.on : ''} ${disabled ? styles.disabled : ''}`}>
    <input
      type="checkbox"
      className={styles.input}
      checked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
      disabled={disabled}
    />
    <span className={styles.thumb} />
  </label>
);

export default Toggle;
