import UserContext from '../../context/UserContext';
import Error from '../shared components/Error';
import logo from '../../pictures/logo.png';
import { POST } from '../../helpers';
import LoginWrapper, {
  LoginHeading,
  LoginForm,
  LoginEmailInput,
  LoginPasswordInput,
  LoginSubmit,
} from '../styled/LoginStyles';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  async function handleLoginSubmit(e) {
    e.preventDefault();

    const loginUser = { email, password };
    const loginRes = await POST('/users/login', loginUser, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (loginRes.status === 400) {
      setError(loginRes.data.msg);
      return;
    }
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem('auth-token', loginRes.data.token);
    history.push('/');
  }

  useEffect(() => {
    if (userData.user) history.push('/');
  });

  return (
    <LoginWrapper>
      <LoginHeading>
        <img src={logo} alt="logo" width="50px" />
        <span>Login</span>
      </LoginHeading>
      <LoginForm onSubmit={handleLoginSubmit}>
        <LoginEmailInput
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
        />
        <LoginPasswordInput
          placeholder="Enter your password"
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <LoginSubmit type="submit">Login</LoginSubmit>
      </LoginForm>
      <span>
        Don't have an account? <a href="/register">Register</a>
      </span>
      {error && <Error errorMsg={error} closeError={() => setError('')} />}
    </LoginWrapper>
  );
}

export default Login;
