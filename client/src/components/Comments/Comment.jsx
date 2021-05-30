import relativeDate from 'tiny-relative-date';
import ProfileInfo from '../shared components/ProfileInfo';
import { getAuthToken, validateToken, GET, POST } from '../../helpers';
import { useState } from 'react';
import { CommentWrapper, CommentContent } from '../styled/CommentsStyles';

function Comment({ username, img, createdAt, text, userPfp, tuwueetId }) {
  const [openProfileInfo, setOpenProfileInfo] = useState(false);
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [joined, setJoined] = useState('');
  const date = relativeDate(createdAt);

  async function getTuwueetUserId() {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    return (
      await POST(
        '/tuwueets/',
        { id: tuwueetId },
        {
          headers: {
            'X-Auth-Token': token,
          },
        }
      )
    ).data.tuwueet.userId;
  }

  async function showProfileInfo() {
    async function getProfileInfo() {
      const token = getAuthToken();
      const validToken = (await validateToken(token)).data;
      if (!validToken) return;
      const userId = await getTuwueetUserId();
      const profileData = (
        await GET(`/users/profileInfo/${userId}`, {
          headers: {
            'X-Auth-Token': token,
          },
        })
      ).data;
      return profileData;
    }
    const profileInfo = await getProfileInfo();
    setBio(profileInfo.bio);
    setLocation(profileInfo.location);
    setWebsite(profileInfo.website);
    setJoined(new Date(profileInfo.joined).toDateString());
    setOpenProfileInfo(true);
  }

  return (
    <>
      <CommentWrapper>
        <img src={userPfp} alt="Avatar" width="50px" height="50px" />
        <CommentContent>
          <p>
            <strong onClick={showProfileInfo}>{username}</strong>{' '}
            <em>{date}</em>
            <br />
            {text}
          </p>
          {img !== 'no img' && <img src={img} alt="Comment post" />}
        </CommentContent>
      </CommentWrapper>
      <ProfileInfo
        open={openProfileInfo}
        setOpen={setOpenProfileInfo}
        bio={bio}
        location={location}
        website={website}
        joined={joined}
      />
    </>
  );
}

export default Comment;
