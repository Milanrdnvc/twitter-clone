import pfp from '../../pictures/pfp.jpg';
import post from '../../pictures/post.png';
import { CommentWrapper, CommentContent } from '../styled/CommentsStyles';

function Comment() {
  return (
    <CommentWrapper>
      <img src={pfp} alt="Avatar" width="50px" height="50px" />
      <CommentContent>
        <p>
          <strong>{'Milanrdnvc'}</strong> <em>{'Jan 20. 2021.'}</em>
          <br />
          {
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt provident quae voluptatem distinctio repellat possimus? Quod dolorum nisi assumenda quis, aliquam nostrum ducimus, quas ratione commodi nulla, aut vero necessitatibus!'
          }
        </p>
        <img src={post} alt="Comment image" width="100%" />
      </CommentContent>
    </CommentWrapper>
  );
}

export default Comment;
