import SidebarWrapper from '../../styled/SidebarStyles';
import Option from './Option';
import home from '../../../pictures/home.svg';
import notification from '../../../pictures/notification.svg';
import login from '../../../pictures/login.svg';
import logo from '../../../pictures/logo.png';

function Sidebar() {
  return (
    <SidebarWrapper>
      <Option href="/" img={logo}></Option>
      <Option href="/" text="Home" img={home}></Option>
      <Option text="Notifications" img={notification}></Option>
      <Option href="/login" text="Log In" img={login}></Option>
    </SidebarWrapper>
  );
}

export default Sidebar;
