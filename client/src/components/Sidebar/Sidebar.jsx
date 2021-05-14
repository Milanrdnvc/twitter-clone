import SidebarWrapper from '../styled/SidebarStyles';
import Option from './Option';
import EditProfile from '../shared components/EditProfile';
import Notifications from '../Notifications/Notifications';
import home from '../../pictures/home.svg';
import notification from '../../pictures/notification.svg';
import login from '../../pictures/login.svg';
import logo from '../../pictures/logo.png';
import profile from '../../pictures/profile.svg';
import UserContext from '../../context/UserContext';
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Sidebar({ logout }) {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [styles, setStyles] = useState({ visibility: 'visible' });
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    history.listen(location => {
      if (location.pathname === '/login' || location.pathname === '/register') {
        setStyles({ visibility: 'hidden' });
      }
    });
    if (
      history.location.pathname === '/login' ||
      history.location.pathname === '/register'
    ) {
      setStyles({ visibility: 'hidden' });
    }
  }, []);

  return (
    <>
      <SidebarWrapper style={styles}>
        <Option href="/" img={logo}></Option>
        <Option href="/" text="Home" img={home}></Option>
        <Option
          href="#"
          text="Notifications"
          img={notification}
          onClick={() => setOpenNotifications(true)}
        ></Option>
        {userData.user ? (
          <Option href="#" text="Log Out" img={login} onClick={logout} />
        ) : (
          <Option href="/login" text="Log In" img={login} />
        )}
        <Option
          href="#"
          img={profile}
          onClick={() => setOpenEditProfile(true)}
        ></Option>
      </SidebarWrapper>
      <EditProfile open={openEditProfile} setOpen={setOpenEditProfile} />
      <Notifications open={openNotifications} setOpen={setOpenNotifications} />
    </>
  );
}

export default Sidebar;
