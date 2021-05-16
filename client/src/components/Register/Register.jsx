import UserContext from '../../context/UserContext';
import Error from '../shared components/Error';
import logo from '../../pictures/logo.png';
import RegisterWrapper, {
  RegisterHeading,
  RegisterForm,
  RegisterUsernameInput,
  RegisterEmailInput,
  RegisterPasswordInput,
  RegisterSubmit,
} from '../styled/RegisterStyles';
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { POST } from '../../helpers';

function Register({ pfp }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [error, setError] = useState('');
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    const newUser = { username, email, password, passwordCheck, pfp };
    const registerRes = await POST('users/register', newUser, null);
    if (registerRes.status === 400) {
      setError(registerRes.data.msg);
      return;
    }
    const loginRes = await POST(
      '/users/login',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
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
    <RegisterWrapper>
      <RegisterHeading>
        <img src={logo} alt="logo" width="50px" />
        <span>Register</span>
      </RegisterHeading>
      <RegisterForm onSubmit={handleRegisterSubmit}>
        <RegisterUsernameInput
          placeholder="Enter your username"
          onChange={e => setUsername(e.target.value)}
        />
        <RegisterEmailInput
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
        />
        <RegisterPasswordInput
          placeholder="Enter your password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <RegisterPasswordInput
          placeholder="Confirm your password"
          type="password"
          onChange={e => setPasswordCheck(e.target.value)}
        />
        <RegisterSubmit type="submit">Register</RegisterSubmit>
      </RegisterForm>
      <span>
        Already have an account? <a href="/login">Login</a>
      </span>
      {error && <Error errorMsg={error} closeError={() => setError('')} />}
    </RegisterWrapper>
  );
}

export default Register;
