import { useState } from 'react';
import { useTitle } from '@/shared/hooks/useTitle';
import Toggle from '@/shared/components/Toggle';
import SettingCard from '../../components/SettingCard';
import SettingRow from '../../components/SettingRow';
import styles from './Privacy.module.css';

const PrivacySettings = () => {
  useTitle('Privacy | Generator App');

  const [state, setState] = useState({
    publicProfile: true,
    activityVisible: false,
    analytics: true,
    cookiesOptional: false,
    dataExport: false,
  });

  const toggle = (key) => setState((s) => ({ ...s, [key]: !s[key] }));

  return (
    <>
      <h2 className={styles.pageTitle}>Privacy</h2>

      <SettingCard title="Profile Visibility">
        <SettingRow
          label="Public profile"
          description="Allow others to view your profile page">
          <Toggle
            checked={state.publicProfile}
            onChange={() => toggle('publicProfile')}
          />
        </SettingRow>
        <SettingRow
          label="Show activity status"
          description="Let others see when you were last active">
          <Toggle
            checked={state.activityVisible}
            onChange={() => toggle('activityVisible')}
          />
        </SettingRow>
      </SettingCard>

      <SettingCard title="Data & Cookies">
        <SettingRow
          label="Analytics"
          description="Help improve the app by sharing usage data">
          <Toggle
            checked={state.analytics}
            onChange={() => toggle('analytics')}
          />
        </SettingRow>
        <SettingRow
          label="Optional cookies"
          description="Cookies used for personalisation and ads">
          <Toggle
            checked={state.cookiesOptional}
            onChange={() => toggle('cookiesOptional')}
          />
        </SettingRow>
      </SettingCard>

      <SettingCard title="Your Data">
        <SettingRow
          label="Export data"
          description="Download a copy of all your data">
          <button className={styles.outlineBtn}>Request export</button>
        </SettingRow>
        <SettingRow
          label="Data retention"
          description="How long we keep your data after account deletion">
          <select style={selectStyle} defaultValue="30">
            <option value="7">7 days</option>
            <option value="30">30 days</option>
            <option value="90">90 days</option>
          </select>
        </SettingRow>
      </SettingCard>
    </>
  );
};

const selectStyle = {
  height: 34,
  padding: '0 10px',
  borderRadius: 8,
  border: '1px solid #d9d9d9',
  fontSize: 13,
  color: '#333',
  background: '#fff',
  cursor: 'pointer',
  outline: 'none',
};

export default PrivacySettings;
