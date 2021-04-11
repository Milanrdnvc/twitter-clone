import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import Profile from './Profile/Profile';
import Comments from './Comments/Comments';
import AppWrapper from './styled/AppStyles';
import UserContext from '../context/UserContext';
import { getAuthToken, validateToken, GET } from '../helpers';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState({
    token: null,
    user: null,
  });
  const history = useHistory();

  async function authorizeUser() {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (validToken) {
      const userRes = await GET('/users', {
        headers: {
          'X-Auth-Token': token,
        },
      });
      setUserData({ token, user: userRes.data });
    }
  }

  function logout() {
    setUserData({
      token: null,
      user: null,
    });
    localStorage.setItem('auth-token', '');
    history.push('/login');
  }

  useEffect(() => {
    authorizeUser();
  }, []);

  return (
    <AppWrapper>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Sidebar logout={logout} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/comments/:id" component={Comments} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Profile />
      </UserContext.Provider>
    </AppWrapper>
  );
}

export default App;
