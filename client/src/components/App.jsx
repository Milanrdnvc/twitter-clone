import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import Profile from './Profile/Profile';
import Comments from './Comments/Comments';
import AppWrapper from './styled/AppStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState({
    token: null,
    user: null,
  });

  useEffect(() => {
    async function authorizeUser() {
      let token = localStorage.getItem('auth-token');
      if (token == null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await axios.post('users/tokenIsValid', null, {
        headers: {
          'X-Auth-Token': token,
        },
      });
      if (tokenRes.data) {
        const userRes = await axios.get('/users', {
          headers: {
            'X-Auth-Token': token,
          },
        });
        setUserData({ token, user: userRes.data });
      }
    }
    authorizeUser();
  }, []);

  return (
    <Router>
      <AppWrapper>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/comments" component={Comments} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
          <Profile />
        </UserContext.Provider>
      </AppWrapper>
    </Router>
  );
}

export default App;
