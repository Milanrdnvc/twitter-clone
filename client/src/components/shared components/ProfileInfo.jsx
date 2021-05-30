import ReactDOM from 'react-dom';
import { ProfileInfoWrapper, ProfileInfoData } from '../styled/ProfileStyles';

function ProfileInfo({ open, setOpen, bio, location, website, joined }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <ProfileInfoWrapper>
      <span onClick={() => setOpen(false)}>&times;</span>
      <ProfileInfoData>
        <p>Bio: {bio}</p>
        <br />
        <p>Location: {location}</p>
        <br />
        <a href={website} target="blank" rel="noreferrer">
          Website
        </a>
        <br />
        <p>Joined: {joined}</p>
      </ProfileInfoData>
    </ProfileInfoWrapper>,
    document.querySelector('#profile-info')
  );
}

export default ProfileInfo;
