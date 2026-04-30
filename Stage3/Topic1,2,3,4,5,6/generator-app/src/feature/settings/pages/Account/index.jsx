import { useState } from 'react';
import { useTitle } from '@/shared/hooks/useTitle';
import Avatar from '@/shared/components/Avatar';
import SettingCard from '../../components/SettingCard';
import SettingRow from '../../components/SettingRow';
import styles from './Account.module.css';

const AccountSettings = () => {
  useTitle('Account Settings | Generator App');

  const [name, setName] = useState('Rahil Sarkhan');
  const [email, setEmail] = useState('rahimlisarkhan@gmail.com');
  const [username, setUsername] = useState('rahimlisarkhan');

  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <>
      <h2 className={styles.pageTitle}>Account</h2>

      <SettingCard title="Profile">
        <div className={styles.avatarRow}>
          <Avatar initials={initials} size="lg" />
          <div>
            <p className={styles.avatarName}>{name}</p>
            <button className={styles.changeBtn}>Change photo</button>
          </div>
        </div>
        <SettingRow label="Full name" description="Your display name across the app">
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </SettingRow>
        <SettingRow label="Username" description="Used in your profile URL">
          <input
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </SettingRow>
        <SettingRow label="Email" description="Your login and notification email">
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </SettingRow>
      </SettingCard>

      <SettingCard title="Security">
        <SettingRow label="Password" description="Last changed 3 months ago">
          <button className={styles.outlineBtn}>Change password</button>
        </SettingRow>
        <SettingRow label="Two-factor authentication" description="Add an extra layer of security">
          <button className={styles.outlineBtn}>Enable 2FA</button>
        </SettingRow>
      </SettingCard>

      <SettingCard title="Danger Zone">
        <SettingRow label="Delete account" description="Permanently remove your account and all data">
          <button className={styles.dangerBtn}>Delete account</button>
        </SettingRow>
      </SettingCard>
    </>
  );
};

export default AccountSettings;
