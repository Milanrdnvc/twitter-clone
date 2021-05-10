import pfp from '../../pictures/pfp.jpg';
import relativeDate from 'tiny-relative-date';
import { CommentWrapper, CommentContent } from '../styled/CommentsStyles';

function Comment({ username, img, createdAt, text, userPfp }) {
  const date = relativeDate(createdAt);

  return (
    <CommentWrapper>
      <img src={pfp} alt="Avatar" width="50px" height="50px" />
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
