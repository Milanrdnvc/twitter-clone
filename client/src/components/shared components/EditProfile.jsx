import ReactDOM from 'react-dom';
import edit from '../../pictures/edit.svg';
import {
  EditProfileWrapper,
  Details,
  EditDetails,
  EditDetailsForm,
  ProfilePfp,
  EditButton,
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

  function handleFileInputChange(e) {
    const file = e.target.files[0];
    previewFile(file);
  }

  async function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      updateProfile({ encodedImg: reader.result, bio, location, website });
    };
  }

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
        <ProfilePfp>
          <img
            src={profilePicture}
            alt="Profile"
            width="100px"
            height="100px"
          />
          <EditButton>
            <input type="file" onChange={handleFileInputChange} />
            <img src={edit} alt="Edit" width="25px" />
          </EditButton>
        </ProfilePfp>
        <span>{username}</span>
        <small>Joined {new Date(joined).toDateString()}</small>
        <small>{bio}</small>
        <small>{location}</small>
        <small>
          <a href={website || '#'} target="_blank" rel="noreferrer">
            My Website
          </a>
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
