import edit from '../../pictures/edit.svg';
import EditProfile from '../shared components/EditProfile';
import UserContext from '../../context/UserContext';
import {
  ProfileWrapper,
  ProfilePfp,
  EditButton,
} from '../styled/ProfileStyles';
import { getAuthToken, POST, GET, validateToken } from '../../helpers';
import { useState, useContext, useEffect } from 'react';

function Profile() {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const { userData } = useContext(UserContext);
  const { profilePicture, setProfilePicture } = useContext(UserContext);
  const [bio, setBio] = useState(null);
  const [location, setLocation] = useState(null);
  const [website, setWebsite] = useState(null);

  function handleFileInputChange(e) {
    const file = e.target.files[0];
    previewFile(file);
  }

  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      updateProfile({ img: reader.result, bio, location, website });
    };
  }

  async function updateProfile({ img, bio, location, website }) {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const updatedUser = (
      await POST(
        '/users/editProfile',
        {
          pfp: img,
          bio,
          location,
          website,
        },
        {
          headers: {
            'X-Auth-Token': token,
          },
        }
      )
    ).data.user;
    setProfilePicture(updatedUser.pfp);
    setBio(updatedUser.bio);
    setLocation(updatedUser.location);
    setWebsite(updatedUser.website);
  }

  async function getProfileInfo() {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const profileData = (
      await GET('/users/profileInfo', {
        headers: {
          'X-Auth-Token': token,
        },
      })
    ).data;
    setProfilePicture(profileData.pfp);
    setBio(profileData.bio);
    setLocation(profileData.location);
    setWebsite(profileData.website);
  }

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <>
      <ProfileWrapper style={{ visibility: !userData.user && 'hidden' }}>
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
        <p>Bio: {bio}</p>
        <p>Location: {location}</p>
        <a href={website || '#'} target="_blank">
          Website
        </a>
        <p>Joined Feb 2021</p>
        <button onClick={() => setOpenEditProfile(true)}>Edit Profile</button>
      </ProfileWrapper>
      <EditProfile
        open={openEditProfile}
        setOpen={setOpenEditProfile}
        setBio={setBio}
        setLocation={setLocation}
        setWebsite={setWebsite}
        updateProfile={updateProfile}
        profilePicture={profilePicture}
        bio={bio}
        location={location}
        website={website}
      />
    </>
  );
}

export default Profile;
