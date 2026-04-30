import { getUsers } from '@/shared/services/api/user.api';
import UserCard from '@/shared/components/UserCard';
import styles from './UsersList.module.css';
import { useFetchData } from '@/shared/hooks/useFetchData';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '@/shared/components/Spinner';
import NotFound from '@/shared/components/NotFound';

const TYPES = {
  COUNTU_DEYIS: 'countu_deyis',
  MUSTERIYELERI_DOLDUR: 'musteriyeleri_doldur',
  EMPLOYEE_DOLDUR: 'employee_doldur',
  BRANCH_DEYIS: 'branch_deyis',
};

const initialState = {
  show: false,
  count: 0,
  customers: [],
  employees: [],
  currentBranch: '',
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.COUNTU_DEYIS:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case TYPES.MUSTERIYELERI_DOLDUR: {
      const newCustomers = action.payload.map(
        (customer) => `${customer} - ${state.currentBranch}`,
      );
      return {
        ...state,
        customers: newCustomers,
      };
    }
    case TYPES.EMPLOYEE_DOLDUR:
      return {
        ...state,
        employees: action.payload,
      };
    case TYPES.BRANCH_DEYIS:
      return {
        ...state,
        currentBranch: action.payload,
      };
    default:
      return state;
  }
}

function UsersList() {
  const { data: users, loading, error } = useFetchData(getUsers);

  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const handleCountChange = () => {
    dispatch({ type: TYPES.COUNTU_DEYIS, payload: 5 });
  };

  if (loading) return <Spinner />;

  if (error) {
    return <NotFound />;
  }

  return (
    <section className={styles.section}>
      <div className="btns">
        <button onClick={handleCountChange} className="btn">
          Countu Deyis :{state.count}
        </button>
        <button
          onClick={() =>
            dispatch({
              type: TYPES.MUSTERIYELERI_DOLDUR,
              payload: ['John Doe', 'Jane Smith'],
            })
          }
          className="btn">
          Musteriyeleri Doldur
        </button>
        <button
          onClick={() =>
            dispatch({
              type: TYPES.EMPLOYEE_DOLDUR,
              payload: ['Alice Johnson', 'Bob Brown'],
            })
          }
          className="btn">
          Employee Doldur
        </button>
        <button
          onClick={() =>
            dispatch({
              type: TYPES.BRANCH_DEYIS,
              payload: 'New York',
            })
          }
          className="btn">
          Branch Deyis
        </button>
      </div>
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
