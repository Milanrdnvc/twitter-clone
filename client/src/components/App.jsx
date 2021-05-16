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
  const [profilePicture, setProfilePicture] = useState(
    'https://res.cloudinary.com/tuwuitter/image/upload/v1621165721/original_m8lw8t.jpg'
  );
  const history = useHistory();

  async function authorizeUser() {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const user = await GET('/users', {
      headers: {
        'X-Auth-Token': token,
      },
    });
    setUserData({ token, user: user.data });
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
      <UserContext.Provider
        value={{ userData, setUserData, profilePicture, setProfilePicture }}
      >
        <Sidebar logout={logout} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/register"
            component={() => <Register pfp={profilePicture} />}
          />
          <Route path="/" exact component={Home} />
          <Route path="/comments/:id" component={Comments} />
        </Switch>
        {userData.user && <Profile />}
      </UserContext.Provider>
    </AppWrapper>
  );
}

export default App;
