import Avatar from '@/shared/components/Avatar';
import styles from './Header.module.css';
import { useGlobal } from '@/shared/providers/global/useGlobal';

const Header = ({ brandName = 'Company' }) => {
  const { profile } = useGlobal();
  console.log(profile);

  const initials = profile?.fullname
    ? profile.fullname
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
    : 'U';

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo}>◈</span>
        <span className={styles.brandName}>{brandName}</span>
      </div>
      <div className={styles.actions}>
        <Avatar initials={initials} size="sm" />
        <span className={styles.username}>{profile?.fullname || 'User'}</span>
      </div>
    </header>
  );
};

export default Header;
