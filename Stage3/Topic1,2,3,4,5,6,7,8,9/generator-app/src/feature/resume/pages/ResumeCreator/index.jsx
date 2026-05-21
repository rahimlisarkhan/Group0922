import { useTitle } from '@/shared/hooks/useTitle';
import ResumeContainer from '../../components/ResumeContainer';
import { useContext } from 'react';
import { GlobalContext } from '@/shared/providers/global/GlobalProvider';

const ResumeCreator = () => {
  useTitle('Resume Creator | Generator App');

  const a = useContext(GlobalContext);

  console.log(a);

  return (
    <div>
      <h1>Resume Creator</h1>
      <ResumeContainer />
    </div>
  );
};

export default ResumeCreator;
