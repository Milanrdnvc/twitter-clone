import pfp from '../../pictures/pfp.jpg';
import edit from '../../pictures/edit.svg';
import EditProfile from '../shared components/EditProfile';
import { ProfileWrapper, ProfilePfp } from '../styled/ProfileStyles';
import { useState } from 'react';

function Profile() {
  const [openEditProfile, setOpenEditProfile] = useState(false);

  return (
    <>
      <ProfileWrapper>
        <ProfilePfp>
          <img src={pfp} alt="Profile" width="100px" />
          <img src={edit} alt="Edit" width="25px" />
        </ProfilePfp>
        <p>Bio</p>
        <p>Location</p>
        <a href="#">Website</a>
        <p>Joined Feb 2021</p>
        <button onClick={() => setOpenEditProfile(true)}>Edit Profile</button>
      </ProfileWrapper>
      <EditProfile open={openEditProfile} setOpen={setOpenEditProfile} />
    </>
  );
}

export default Profile;
