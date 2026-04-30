import { NavLink } from 'react-router-dom';
import styles from './SettingsLayout.module.css';

const NAV_ITEMS = [
  { to: '/setting',              end: true, icon: '⚙️', label: 'General',       desc: 'Appearance & language' },
  { to: '/setting/account',      end: false, icon: '👤', label: 'Account',        desc: 'Profile & password' },
  { to: '/setting/notifications',end: false, icon: '🔔', label: 'Notifications',  desc: 'Email & push alerts' },
  { to: '/setting/privacy',      end: false, icon: '🔒', label: 'Privacy',        desc: 'Data & security' },
];

const SettingsLayout = ({ children }) => (
  <div className={styles.root}>
    <aside className={styles.sidebar}>
      <p className={styles.sidebarLabel}>Settings</p>
      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ to, end, icon, label, desc }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              [styles.item, isActive ? styles.active : ''].join(' ')
            }
          >
            <span className={styles.icon}>{icon}</span>
            <span className={styles.text}>
              <span className={styles.label}>{label}</span>
              <span className={styles.desc}>{desc}</span>
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>

    <div className={styles.content}>{children}</div>
  </div>
);

export default SettingsLayout;
