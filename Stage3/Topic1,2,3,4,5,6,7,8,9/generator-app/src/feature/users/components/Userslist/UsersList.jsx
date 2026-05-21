import { getUsers } from '@/shared/services/api/user.api';
import UserCard from '@/shared/components/UserCard';
import styles from './UsersList.module.css';
import { useFetchData } from '@/shared/hooks/useFetchData';
import { useNavigate } from 'react-router-dom';
import Spinner from '@/shared/components/Spinner';
import NotFound from '@/shared/components/NotFound';
import { useDispatch } from 'react-redux';
import { getCustomers } from '@/shared/store/customer';

function UsersList() {
  const dispatch = useDispatch();

  const {
    data: users,
    loading,
    error,
  } = useFetchData(getUsers, {
    // key: 'users',
    // refetchInterval: 60000,
    onSuccess: (data) => {
      dispatch(getCustomers(data));
    },
  });

  // const [state, localDispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  if (loading) return <Spinner />;

  if (error) {
    return <NotFound />;
  }

  return (
    <section className={styles.section}>
      <div className="btns"></div>
      <div className={styles.heading}>
        <h2 className={styles.title}>Users</h2>
        <span className={styles.badge}>{users.length}</span>
      </div>
      <div className={styles.grid}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => navigate(`/user-info/${user.id}`)}
          />
        ))}
      </div>
    </section>
  );
}

export default UsersList;

// const data1 = {
//   type: 'countu_deyis',
//   payload: 5,
// };

// const data2 = {
//   type: 'musteriyeleri_doldur',
//   payload: ['John Doe', 'Jane Smith'],
// };
