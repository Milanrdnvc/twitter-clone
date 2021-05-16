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
  username,
  joined,
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
      encodedImg: [profilePicture, 'old'],
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
        <span>{username}</span>
        <small>Joined {new Date(joined).toDateString()}</small>
        <small>{bio}</small>
        <small>{location}</small>
        <small>
          <a href={website || '#'}>My Website</a>
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
