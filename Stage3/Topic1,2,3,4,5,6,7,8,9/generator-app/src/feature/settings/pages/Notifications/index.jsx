import { useState } from 'react';
import { useTitle } from '@/shared/hooks/useTitle';
import Toggle from '@/shared/components/Toggle';
import SettingCard from '../../components/SettingCard';
import SettingRow from '../../components/SettingRow';
import styles from './Notifications.module.css';

const NotificationSettings = () => {
  useTitle('Notifications | Generator App');

  const [state, setState] = useState({
    emailResume: true,
    emailUsers: false,
    emailMarketing: false,
    pushAll: true,
    pushMentions: true,
    pushUpdates: false,
    digestWeekly: true,
  });

  const toggle = (key) => setState((s) => ({ ...s, [key]: !s[key] }));

  return (
    <>
      <h2 className={styles.pageTitle}>Notifications</h2>

      <SettingCard title="Email Notifications">
        <SettingRow
          label="Resume activity"
          description="Get notified when a resume is created or updated">
          <Toggle
            checked={state.emailResume}
            onChange={() => toggle('emailResume')}
          />
        </SettingRow>
        <SettingRow
          label="User activity"
          description="New users and profile changes">
          <Toggle
            checked={state.emailUsers}
            onChange={() => toggle('emailUsers')}
          />
        </SettingRow>
        <SettingRow
          label="Marketing & updates"
          description="Product news and feature announcements">
          <Toggle
            checked={state.emailMarketing}
            onChange={() => toggle('emailMarketing')}
          />
        </SettingRow>
      </SettingCard>

      <SettingCard title="Push Notifications">
        <SettingRow
          label="Enable push notifications"
          description="Receive alerts in your browser">
          <Toggle checked={state.pushAll} onChange={() => toggle('pushAll')} />
        </SettingRow>
        <SettingRow label="Mentions" description="When someone mentions you">
          <Toggle
            checked={state.pushMentions}
            onChange={() => toggle('pushMentions')}
            disabled={!state.pushAll}
          />
        </SettingRow>
        <SettingRow
          label="App updates"
          description="New features and improvements">
          <Toggle
            checked={state.pushUpdates}
            onChange={() => toggle('pushUpdates')}
            disabled={!state.pushAll}
          />
        </SettingRow>
      </SettingCard>

      <SettingCard title="Digest">
        <SettingRow
          label="Weekly digest"
          description="A summary of activity every Monday morning">
          <Toggle
            checked={state.digestWeekly}
            onChange={() => toggle('digestWeekly')}
          />
        </SettingRow>
      </SettingCard>
    </>
  );
};

export default NotificationSettings;
