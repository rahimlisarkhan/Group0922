import { useTitle } from '@/shared/hooks/useTitle';
import { useForm } from '@/shared/hooks/useForm';
import Avatar from '@/shared/components/Avatar';
import SettingCard from '../../components/SettingCard';
import SettingRow from '../../components/SettingRow';
import styles from './Account.module.css';
import { useGlobal } from '@/shared/providers/global/useGlobal';
import { useEffect } from 'react';

const initialValues = { fullname: '', email: '', username: '' };

const AccountSettings = () => {
  useTitle('Account Settings | Generator App');

  const { handleProfileUpdate, profile } = useGlobal();

  const { values, handleChange, handleSubmit, setFieldsValue } = useForm({
    initialValues,
    onSubmit: (data) => {
      handleProfileUpdate(data);
    },
  });

  const initials = values.fullname
    ? values.fullname
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
    : 'U';

  useEffect(() => {
    setFieldsValue(profile);
  }, [profile, setFieldsValue]);

  return (
    <>
      <h2 className={styles.pageTitle}>Account</h2>

      <SettingCard title="Profile">
        <div className={styles.avatarRow}>
          <Avatar initials={initials} size="lg" />
          <div>
            <p className={styles.avatarName}>{values.name}</p>
            <button className={styles.changeBtn}>Change photo</button>
          </div>
        </div>
        <SettingRow
          label="Full name"
          description="Your display name across the app">
          <input
            className={styles.input}
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
        </SettingRow>
        <SettingRow label="Username" description="Used in your profile URL">
          <input
            className={styles.input}
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </SettingRow>
        <SettingRow
          label="Email"
          description="Your login and notification email">
          <input
            className={styles.input}
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </SettingRow>
        <SettingRow>
          <button className={styles.savebtn} onClick={handleSubmit}>
            Save account
          </button>
        </SettingRow>
      </SettingCard>

      <SettingCard title="Security">
        <SettingRow label="Password" description="Last changed 3 months ago">
          <button className={styles.outlineBtn}>Change password</button>
        </SettingRow>
        <SettingRow
          label="Two-factor authentication"
          description="Add an extra layer of security">
          <button className={styles.outlineBtn}>Enable 2FA</button>
        </SettingRow>
      </SettingCard>

      <SettingCard title="Danger Zone">
        <SettingRow
          label="Delete account"
          description="Permanently remove your account and all data">
          <button className={styles.dangerBtn}>Delete account</button>
        </SettingRow>
      </SettingCard>
    </>
  );
};

export default AccountSettings;
