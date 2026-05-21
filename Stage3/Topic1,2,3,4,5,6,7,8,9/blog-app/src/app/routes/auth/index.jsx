import { Route, Routes } from 'react-router-dom';

import ForgetPassword from '@/feature/auth/pages/ForgetPassword';
import SignIn from '@/feature/auth/pages/SignIn';
import SignUp from '@/feature/auth/pages/SignUp';
import NotFound from '@/shared/components/NotFound';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="*" element={<Navigate to="/signin" />} /> */}
    </Routes>
  );
};
