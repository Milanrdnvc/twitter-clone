import SidebarWrapper from '../styled/SidebarStyles';
import Option from './Option';
import EditProfile from '../shared components/EditProfile';
import Notifications from '../Notifications/Notifications';
import home from '../../pictures/home.svg';
import notification from '../../pictures/notification.svg';
import login from '../../pictures/login.svg';
import logo from '../../pictures/logo.png';
import profile from '../../pictures/profile.svg';
import UserContext from '../../context/UserContext';
import {
  getAuthToken,
  validateToken,
  uploadImage,
  POST,
  GET,
} from '../../helpers';
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Sidebar({ logout }) {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [bio, setBio] = useState(null);
  const [location, setLocation] = useState(null);
  const [website, setWebsite] = useState(null);
  const [joined, setJoined] = useState(null);
  const [styles, setStyles] = useState({ visibility: 'visible' });
  const { profilePicture, setProfilePicture, userData } =
    useContext(UserContext);
  const history = useHistory();

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
    history.listen(location => {
      if (location.pathname === '/login' || location.pathname === '/register') {
        setStyles({ visibility: 'hidden' });
      } else if (location.pathname === '/')
        setStyles({ visibility: 'visible' });
    });
    if (
      history.location.pathname === '/login' ||
      history.location.pathname === '/register'
    ) {
      setStyles({ visibility: 'hidden' });
    }
    getProfileInfo();
  }, []);

  return (
    <>
      <SidebarWrapper style={styles}>
        <Option href="/" img={logo}></Option>
        <Option href="/" text="Home" img={home}></Option>
        <Option
          href="#"
          text="Notifications"
          img={notification}
          onClick={() => setOpenNotifications(true)}
        ></Option>
        {userData.user ? (
          <Option href="#" text="Log Out" img={login} onClick={logout} />
        ) : (
          <Option href="/login" text="Log In" img={login} />
        )}
        <Option
          href="#"
          img={profile}
          onClick={() => setOpenEditProfile(true)}
        ></Option>
      </SidebarWrapper>
      {userData.user && (
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
          username={userData.user.username}
          joined={joined}
        />
      )}
      <Notifications open={openNotifications} setOpen={setOpenNotifications} />
    </>
  );
}

export default Sidebar;
