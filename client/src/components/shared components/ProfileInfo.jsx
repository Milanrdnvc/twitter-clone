import ReactDOM from 'react-dom';
import { ProfileInfoWrapper } from '../styled/ProfileStyles';

function ProfileInfo({ open, setOpen, bio, location, website }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <ProfileInfoWrapper></ProfileInfoWrapper>,
    document.querySelector('profile-info')
  );
}

export default ProfileInfo;
