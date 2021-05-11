import ReactDOM from 'react-dom';
import {
  EditProfileWrapper,
  Details,
  EditDetails,
  EditDetailsForm,
} from '../styled/ProfileStyles';

function EditProfile({
  open,
  setOpen,
  updateProfile,
  profilePicture,
  bio,
  location,
  website,
}) {
  if (!open) return null;

  async function handleEditProfileSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    e.target.reset();
    const formBio = data.get('bio');
    const formLocation = data.get('location');
    const formWebsite = data.get('website');
    updateProfile({
      img: profilePicture,
      bio: formBio || bio,
      location: formLocation || location,
      website: formWebsite || website,
    });
    setOpen(false);
  }

  return ReactDOM.createPortal(
    <EditProfileWrapper>
      <span onClick={() => setOpen(false)}>&times;</span>
      <Details>
        <img src={profilePicture} alt="Profile picture" width="70px" />
        <span>Username</span>
        <small>Joined 1. Jan 2021</small>
        <small>1.1.2001</small>
        <small>Serbia</small>
        <small>
          <a href="http://www.google.com">My Website</a>
        </small>
      </Details>
      <EditDetails>
        <EditDetailsForm onSubmit={handleEditProfileSubmit}>
          <input type="text" name="bio" placeholder="Bio" />
          <input type="text" name="location" placeholder="Location" />
          <input
            type="text"
            name="website"
            placeholder="Website"
            autoComplete="off"
          />
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button type="submit">Save</button>
        </EditDetailsForm>
      </EditDetails>
    </EditProfileWrapper>,
    document.getElementById('edit-profile')
  );
}

export default EditProfile;
