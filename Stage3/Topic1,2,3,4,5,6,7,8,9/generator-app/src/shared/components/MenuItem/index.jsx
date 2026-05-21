import { Link, useLocation } from 'react-router-dom';
import styles from './MenuItem.module.css';

const MenuItem = ({ to, icon, label, end = false }) => {
  const { pathname } = useLocation();
  const isActive = end ? pathname === to : pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={[styles.item, isActive ? styles.active : ''].join(' ')}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </Link>
  );
};

export default MenuItem;
