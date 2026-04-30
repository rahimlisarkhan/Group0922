import { Navigate, Route, Routes } from 'react-router-dom';

import SettingsLayout from '../../components/SettingsLayout';
import GeneralContent from '../GeneralContent';
import AccountSettings from '../Account';
import NotificationSettings from '../Notifications';
import PrivacySettings from '../Privacy';

const GeneralSettings = () => (
  <SettingsLayout>
    <Routes>
      <Route path="/" element={<GeneralContent />} />
      <Route path="account" element={<AccountSettings />} />
      <Route path="notifications" element={<NotificationSettings />} />
      <Route path="privacy" element={<PrivacySettings />} />
      <Route path="*" element={<Navigate to="/setting" />} />
    </Routes>
  </SettingsLayout>
);

export default GeneralSettings;
