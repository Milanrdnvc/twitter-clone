import edit from '../../pictures/edit.svg';
import EditProfile from '../shared components/EditProfile';
import UserContext from '../../context/UserContext';
import {
  ProfileWrapper,
  ProfilePfp,
  EditButton,
} from '../styled/ProfileStyles';
import {
  getAuthToken,
  POST,
  GET,
  validateToken,
  uploadImage,
} from '../../helpers';
import { useState, useContext, useEffect } from 'react';

function Profile({ openProfile }) {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [bio, setBio] = useState(null);
  const [location, setLocation] = useState(null);
  const [website, setWebsite] = useState(null);
  const [joined, setJoined] = useState(null);
  const {
    profilePicture,
    setProfilePicture,
    userData: {
      user: { username },
    },
  } = useContext(UserContext);

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

  async function updateProfile({ encodedImg, bio, location, website }) {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    let uploadedImg;
    if (typeof encodedImg === 'string')
      uploadedImg = (await uploadImage(encodedImg, token)).data.url;
    else uploadedImg = encodedImg[0];
    const updatedUser = (
      await POST(
        '/users/editProfile',
        {
          pfp: uploadedImg,
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
    setJoined(profileData.joined);
  }

  useEffect(() => {
    getProfileInfo();
  }, []);

  if (!openProfile) return null;

  return (
    <>
      <ProfileWrapper>
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
        <p>Joined: {new Date(joined).toDateString()}</p>
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
        username={username}
        joined={joined}
      />
    </>
  );
}

export default Profile;
