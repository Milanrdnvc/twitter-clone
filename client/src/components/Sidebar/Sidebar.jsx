import SidebarWrapper from '../styled/SidebarStyles';
import Option from './Option';
import EditProfile from '../shared components/EditProfile';
import Notifications from '../Notifications/Notifications';
import home from '../../pictures/home.svg';
import notification from '../../pictures/notification.svg';
import login from '../../pictures/login.svg';
import logo from '../../pictures/logo.png';
import profile from '../../pictures/profile.svg';
import { useState } from 'react';

function Sidebar() {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  return (
    <>
      <SidebarWrapper>
        <Option href="/" img={logo}></Option>
        <Option href="/" text="Home" img={home}></Option>
        <Option
          href="#"
          text="Notifications"
          img={notification}
          onClick={() => setOpenNotifications(true)}
        ></Option>
        <Option href="/login" text="Log In" img={login}></Option>
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
