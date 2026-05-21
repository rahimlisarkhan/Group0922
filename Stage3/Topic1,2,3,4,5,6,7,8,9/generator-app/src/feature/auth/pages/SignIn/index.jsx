import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <button onClick={() => navigate('/forget-password')}>
          Forget Password
        </button>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignIn;
