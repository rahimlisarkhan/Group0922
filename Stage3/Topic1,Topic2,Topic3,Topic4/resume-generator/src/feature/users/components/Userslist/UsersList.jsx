import { useEffect, useState } from "react";
import { getUsers } from "@/services/api/user.api";
import UserCard from "@/shared/UserCard";
import styles from "./UsersList.module.css";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await getUsers();
      if (res.result) {
        setUsers(res.data);
      } else {
        setError("Failed to load users.");
      }
      setLoading(false);
    };

    fetch();
  }, []);

  if (loading) {
    return (
      <div className={styles.center}>
        <div className={styles.spinner} />
      </div>
    );
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Users</h2>
        <span className={styles.badge}>{users.length}</span>
      </div>
      <div className={styles.grid}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}

export default UsersList;
