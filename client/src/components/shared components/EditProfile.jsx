import ReactDOM from 'react-dom';
import pfp from '../../pictures/pfp.jpg';
import EditProfileWrapper, {
  Details,
  EditDetails,
  EditDetailsForm,
} from '../styled/ProfileStyles';

function EditProfile({ open, setOpen }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <EditProfileWrapper>
      <span onClick={() => setOpen(false)}>&times;</span>
      <Details>
        <img src={pfp} alt="Profile picture" width="70px" />
        <span>Username</span>
        <small>Joined 1. Jan 2021</small>
        <small>1.1.2001</small>
        <small>Serbia</small>
        <small>
          <a href="http://www.google.com">My Website</a>
        </small>
      </Details>
      <EditDetails>
        <EditDetailsForm>
          <input type="text" placeholder="Bio" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Website" />
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button>Save</button>
        </EditDetailsForm>
      </EditDetails>
    </EditProfileWrapper>,
    document.getElementById('edit-profile')
  );
}

export default EditProfile;
