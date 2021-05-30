import ReactDOM from 'react-dom';
import { ProfileInfoWrapper } from '../styled/ProfileStyles';

function ProfileInfo({ open, setOpen, bio, location, website }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <ProfileInfoWrapper>
      <span onClick={() => setOpen(false)}>&times;</span>
    </ProfileInfoWrapper>,
    document.querySelector('#profile-info')
  );
}

export default ProfileInfo;
