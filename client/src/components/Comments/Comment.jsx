import relativeDate from 'tiny-relative-date';
import { useState } from 'react';
import { CommentWrapper, CommentContent } from '../styled/CommentsStyles';

function Comment({ username, img, createdAt, text, userPfp }) {
  const [openProfileInfo, setOpenProfileInfo] = useState(false);
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [joined, setJoined] = useState('');
  const date = relativeDate(createdAt);

  return (
    <CommentWrapper>
      <img src={userPfp} alt="Avatar" width="50px" height="50px" />
      <CommentContent>
        <p>
          <strong>{username}</strong> <em>{date}</em>
          <br />
          {text}
        </p>
        {img !== 'no img' && <img src={img} alt="Comment post" />}
      </CommentContent>
    </CommentWrapper>
  );
}

export default Comment;
