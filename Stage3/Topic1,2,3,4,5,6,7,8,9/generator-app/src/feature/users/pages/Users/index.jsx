import { useTitle } from '@/shared/hooks/useTitle';
import UsersList from '../../components/Userslist';
// import { useContext } from 'react';
// import { GlobalContext } from '@/shared/providers/global/GlobalProvider';

const Users = () => {
  useTitle('Users | Generator App');

  // const a = useContext(GlobalContext);
  // console.log(a);

  return (
    <div>
      <UsersList />
    </div>
  );
};

export default Users;
