import { AuthRouter } from './auth';
import { ProtectedRouter } from './protected';

export const Router = () => {
  const isAuthenticated = true; // This should be determined by your authentication logic

  if (isAuthenticated) {
    return <ProtectedRouter />;
  }

  return <AuthRouter />;
};
