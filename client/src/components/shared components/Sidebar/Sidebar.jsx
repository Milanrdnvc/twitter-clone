import SidebarWrapper from '../../styled/SidebarStyles';
import Option from './Option';
import home from '../../../pictures/home.svg';
import notification from '../../../pictures/notification.svg';
import login from '../../../pictures/login.svg';
import logo from '../../../pictures/logo.png';
import profile from '../../../pictures/profile.svg';
import EditProfile from '../../Profile/EditProfile';
import { useState } from 'react';

function Sidebar() {
  const [openEditProfile, setOpenEditProfile] = useState(false);

  return (
    <>
      <SidebarWrapper>
        <Option href="/" img={logo}></Option>
        <Option href="/" text="Home" img={home}></Option>
        <Option href="#" text="Notifications" img={notification}></Option>
        <Option href="/login" text="Log In" img={login}></Option>
        <Option
          href="#"
          img={profile}
          onClick={() => setOpenEditProfile(true)}
        ></Option>
      </SidebarWrapper>
      <EditProfile open={openEditProfile} setOpen={setOpenEditProfile} />
    </>
  );
}

export default Sidebar;
