import MenuItem from '@/shared/components/MenuItem';
import styles from './Sidebar.module.css';

const Sidebar = ({ items = [] }) => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {items.map(({ to, icon, label }) => (
          <MenuItem
            key={to}
            to={to}
            icon={icon}
            label={label}
            end={to === '/'}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
