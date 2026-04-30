import Avatar from '@/shared/components/Avatar';
import styles from './Header.module.css';

const Header = ({ brandName = 'Company', user = null }) => {
  const initials = user?.name
    ? user.name.split(' ').map((w) => w[0]).join('').slice(0, 2)
    : 'U';

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo}>◈</span>
        <span className={styles.brandName}>{brandName}</span>
      </div>
      <div className={styles.actions}>
        <Avatar initials={initials} size="sm" />
      </div>
    </header>
  );
};

export default Header;
