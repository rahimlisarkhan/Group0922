import { useState } from 'react';
import { useTitle } from '@/shared/hooks/useTitle';
import SettingCard from '../../components/SettingCard';
import SettingRow from '../../components/SettingRow';
import Toggle from '@/shared/components/Toggle';
import styles from './GeneralContent.module.css';

const GeneralContent = () => {
  useTitle('General Settings | Generator App');

  const [compactMode, setCompactMode] = useState(false);
  const [animations, setAnimations] = useState(true);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  return (
    <>
      <h2 className={styles.pageTitle}>General</h2>

      <SettingCard title="Appearance">
        <SettingRow label="Theme" description="Choose your preferred color scheme">
          <select
            className={styles.select}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </SettingRow>
        <SettingRow label="Compact mode" description="Reduce spacing across the UI">
          <Toggle checked={compactMode} onChange={setCompactMode} />
        </SettingRow>
        <SettingRow label="Animations" description="Enable interface animations">
          <Toggle checked={animations} onChange={setAnimations} />
        </SettingRow>
      </SettingCard>

      <SettingCard title="Language & Region">
        <SettingRow label="Language" description="Language used across the app">
          <select
            className={styles.select}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="az">Azerbaijani</option>
            <option value="ru">Russian</option>
            <option value="tr">Turkish</option>
          </select>
        </SettingRow>
        <SettingRow label="Timezone" description="Used for dates and timestamps">
          <select className={styles.select} defaultValue="UTC+4">
            <option>UTC+0</option>
            <option>UTC+3</option>
            <option>UTC+4</option>
            <option>UTC+5</option>
          </select>
        </SettingRow>
      </SettingCard>
    </>
  );
};

export default GeneralContent;
