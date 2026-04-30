import { useTitle } from '@/shared/hooks/useTitle';
import ResumeContainer from '../../components/ResumeContainer';

const ResumeCreator = () => {
  useTitle('Resume Creator | Generator App');

  return (
    <div>
      <h1>Resume Creator</h1>
      <ResumeContainer />
    </div>
  );
};

export default ResumeCreator;
