import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.css';

const MenuItem = ({ to, icon, label, end = false }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [styles.item, isActive ? styles.active : ''].join(' ')
      }
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </NavLink>
  );
};

export default MenuItem;
