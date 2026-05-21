import Header from '@/shared/components/Header';
import Sidebar from '@/shared/components/Sidebar';
import {
  FileTextOutlined,
  ReadOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import styles from './Layout.module.css';

const NAV_ITEMS = [
  { to: '/', label: 'Users', icon: <TeamOutlined /> },
  {
    to: '/resume-creator',
    label: 'Resume Creator',
    icon: <FileTextOutlined />,
  },
  { to: '/blogs', label: 'Blogs', icon: <ReadOutlined /> },
  { to: '/setting', label: 'Settings', icon: <SettingOutlined /> },
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
