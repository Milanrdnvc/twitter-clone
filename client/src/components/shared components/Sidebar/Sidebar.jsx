import SidebarWrapper from '../../styled/SidebarStyles';
import Options from './Options';
import Profile from './Profile';

function Sidebar() {
  return (
    <SidebarWrapper>
      <Options />
      <Profile />
    </SidebarWrapper>
  );
}

export default Sidebar;
