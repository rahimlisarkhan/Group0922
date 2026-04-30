import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.description}>
        The page you are looking for might have been removed,
        <br />
        had its name changed, or is temporarily unavailable.
      </p>
      <div className={styles.actions}>
        <button className={styles.btnPrimary} onClick={() => navigate('/')}>
          Go Home
        </button>
        <button className={styles.btnGhost} onClick={() => navigate(-1)}>
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
