import { ProfileWrapper, ProfilePfp } from '../../styled/SidebarStyles';
import pfp from '../../../pictures/pfp.jpg';

function Profile() {
  return (
    <ProfileWrapper>
      <ProfilePfp src={pfp} />
    </ProfileWrapper>
  );
}

export default Profile;
