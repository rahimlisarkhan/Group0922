import Header from '@/shared/components/Header';
import Sidebar from '@/shared/components/Sidebar';
import styles from './Layout.module.css';

const NAV_ITEMS = [
  { to: '/', label: 'Users', icon: '👥' },
  { to: '/resume-creator', label: 'Resume Creator', icon: '📄' },
  { to: '/setting', label: 'Settings', icon: '⚙️' },
];

const Layout = ({ children, user }) => {
  return (
    <div className={styles.root}>
      <Header user={user} />
      <div className={styles.body}>
        <Sidebar items={NAV_ITEMS} />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
