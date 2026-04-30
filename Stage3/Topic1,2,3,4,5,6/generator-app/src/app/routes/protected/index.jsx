import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/shared/components/Layout';

// import Users from '@/feature/users/pages/Users';
// import UserDetails from '@/feature/users/pages/Detail';
// import GeneralSettings from '@/feature/settings/pages/General';
// import ResumeCreator from '@/feature/resume/pages/ResumeCreator';

import { lazy, Suspense } from 'react';
import Spinner from '@/shared/components/Spinner';

const Users = lazy(() => import('@/feature/users/pages/Users'));
const UserDetails = lazy(() => import('@/feature/users/pages/Detail'));
const GeneralSettings = lazy(() => import('@/feature/settings/pages/General'));
const ResumeCreator = lazy(
  () => import('@/feature/resume/pages/ResumeCreator'),
);

export const ProtectedRouter = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user-info/:userId" element={<UserDetails />} />

          <Route path="/resume-creator" element={<ResumeCreator />} />

          <Route path="/setting/*" element={<GeneralSettings />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
