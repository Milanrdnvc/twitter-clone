import pfp from '../../pictures/pfp.jpg';
import post from '../../pictures/post.png';
import { CommentWrapper, CommentContent } from '../styled/CommentsStyles';

function Comment({ username, img, createdAt, text, userPfp }) {
  return (
    <CommentWrapper>
      <img src={pfp} alt="Avatar" width="50px" height="50px" />
      <CommentContent>
        <p>
          <strong>{username}</strong> <em>{createdAt}</em>
          <br />
          {text}
        </p>
        {img !== 'no img' && <img src={img} alt="Comment post" />}
      </CommentContent>
    </CommentWrapper>
  );
}

export default Comment;
