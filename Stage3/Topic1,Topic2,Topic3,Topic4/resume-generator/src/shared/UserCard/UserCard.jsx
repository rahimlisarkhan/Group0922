import PropTypes from "prop-types";
import Avatar from "@/shared/Avatar";
import styles from "./UserCard.module.css";

function UserCard({ user }) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Avatar initials={initials} size="lg" />
        <div className={styles.identity}>
          <h3 className={styles.name}>{user.name}</h3>
          <span className={styles.username}>@{user.username}</span>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.row}>
          <span className={styles.icon}>✉</span>
          <a href={`mailto:${user.email}`} className={styles.link}>
            {user.email}
          </a>
        </div>
        <div className={styles.row}>
          <span className={styles.icon}>📞</span>
          <span>{user.phone}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.icon}>🌐</span>
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {user.website}
          </a>
        </div>
        <div className={styles.row}>
          <span className={styles.icon}>🏢</span>
          <span>{user.company?.name}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.icon}>📍</span>
          <span>
            {user.address?.city}, {user.address?.suite}
          </span>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.shape({ name: PropTypes.string }),
    address: PropTypes.shape({ city: PropTypes.string, suite: PropTypes.string }),
  }).isRequired,
};

export default UserCard;
