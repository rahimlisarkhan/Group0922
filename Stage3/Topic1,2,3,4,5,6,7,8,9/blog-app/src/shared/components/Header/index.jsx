import Avatar from '@/shared/components/Avatar';
import styles from './Header.module.css';

const Header = ({ brandName = 'Medium Blog' }) => {

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo}>◈</span>
        <span className={styles.brandName}>{brandName}</span>
      </div>

    </header>
  );
};

export default Header;
