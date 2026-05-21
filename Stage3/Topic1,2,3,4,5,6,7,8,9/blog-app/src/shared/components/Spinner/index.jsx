import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.center}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Spinner;
