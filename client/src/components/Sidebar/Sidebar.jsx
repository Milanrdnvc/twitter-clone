import SidebarStyles from '../styled/SidebarStyles';
import Options from './Options';
import Profile from './Profile';

function Sidebar() {
  return (
    <SidebarStyles>
      <Options />
      <Profile />
    </SidebarStyles>
  );
}

export default Sidebar;
