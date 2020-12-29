import { ProfileStyles, ProfilePfpStyles } from '../styled/SidebarStyles';
import pfp from '../../pictures/pfp.jpg';

function Profile() {
  return (
    <ProfileStyles>
      <ProfilePfpStyles src={pfp} />
    </ProfileStyles>
  );
}

export default Profile;
