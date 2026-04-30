import { useNavigate, useParams } from 'react-router-dom';

import { useFetchData } from '@/shared/hooks/useFetchData';
import { useTitle } from '@/shared/hooks/useTitle';
import { getUserById } from '@/shared/services/api/user.api';
import Avatar from '@/shared/components/Avatar';
import InfoCard from '@/shared/components/InfoCard';
import InfoRow from '@/shared/components/InfoRow';
import Spinner from '@/shared/components/Spinner';
import styles from './UserDetail.module.css';
import NotFound from '@/shared/components/NotFound';

const UserDetails = () => {
  useTitle('User Details | Generator App');

  const { userId } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetchData(() => getUserById(userId));

  if (loading) return <Spinner />;

  if (error) {
    return <NotFound />;
  }

  const { name, username, email, phone, website, address, company } = data;

  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className={styles.profile}>
        <Avatar initials={name} size="xl" />
        <div className={styles.profileInfo}>
          <h1 className={styles.name}>{name}</h1>
          <span className={styles.username}>@{username}</span>
        </div>
      </div>

      <div className={styles.grid}>
        <InfoCard title="Contact">
          <InfoRow label="Email" value={email} />
          <InfoRow label="Phone" value={phone} />
          <InfoRow label="Website" value={website} />
        </InfoCard>

        <InfoCard title="Address">
          <InfoRow
            label="Street"
            value={`${address.street}, ${address.suite}`}
          />
          <InfoRow label="City" value={address.city} />
          <InfoRow label="Zipcode" value={address.zipcode} />
        </InfoCard>

        <InfoCard title="Company">
          <InfoRow label="Name" value={company.name} />
          <InfoRow label="Phrase" value={company.catchPhrase} />
          <InfoRow label="Business" value={company.bs} />
        </InfoCard>
      </div>
    </div>
  );
};

export default UserDetails;
