import relativeDate from 'tiny-relative-date';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';
import { CommentWrapper, CommentContent } from '../styled/CommentsStyles';

function Comment({ username, img, createdAt, text, userPfp }) {
  const date = relativeDate(createdAt);
  const { profilePicture } = useContext(UserContext);

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
