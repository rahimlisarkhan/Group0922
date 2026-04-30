import { useTitle } from '@/shared/hooks/useTitle';
import UsersList from '../../components/Userslist';

const Users = () => {
  useTitle('Users | Generator App');

  return (
    <div>
      <UsersList />
    </div>
  );
};

export default Users;
