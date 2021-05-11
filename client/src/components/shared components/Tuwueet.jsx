import like from '../../pictures/like.svg';
import filledLike from '../../pictures/filledLike.svg';
import comment from '../../pictures/comment.svg';
import UserContext from '../../context/UserContext';
import relativeDate from 'tiny-relative-date';
import { getAuthToken, validateToken, POST } from '../../helpers';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  TuwueetWrapper,
  TuwueetInfo,
  TuwueetPfp,
  TuwueetOptions,
} from '../styled/HomeStyles';

function Tuwueet({
  text,
  img,
  createdAt,
  username,
  id,
  likesNum,
  commentsNum,
  liked,
}) {
  const [likes, setLikes] = useState(likesNum);
  const [isLiked, setIsLiked] = useState(liked);
  const { userData, profilePicture } = useContext(UserContext);
  const history = useHistory();
  const date = relativeDate(createdAt);

  async function toggleLikeTuwueet(action) {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const updatedLikes = (
      await POST(
        `/tuwueets/${action}`,
        { userId: userData.user.id, tuwueetId: id },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': token,
          },
        }
      )
    ).data;
    const likesNumber =
      action === 'like' ? updatedLikes.likes : updatedLikes.filteredLikes;
    if (action === 'unlike') setIsLiked(false);
    else setIsLiked(true);
    setLikes(likesNumber.length);
  }

  async function handleLikeButton() {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const tuwueet = await POST(
      '/tuwueets/',
      { id },
      {
        headers: {
          'X-Auth-Token': token,
        },
      }
    );
    const isLiked = tuwueet.data.tuwueet.likes.find(
      user => user.userId === userData.user.id
    );
    if (isLiked) toggleLikeTuwueet('unlike');
    else toggleLikeTuwueet('like');
  }

  function handleCommentButton() {
    history.push(`/comments/${id}`);
  }

  return (
    <TuwueetWrapper>
      <TuwueetPfp src={profilePicture} />
      <TuwueetInfo>
        <p>
          <strong>{username}</strong> <em>{date}</em>
          <br />
          {text}
        </p>
        {img !== 'no img' && <img src={img} alt="Tuwueet post" />}
        <TuwueetOptions>
          <div onClick={handleCommentButton}>
            <img src={comment} alt="Comment" />
            <span>{commentsNum}</span>
          </div>
          <div onClick={handleLikeButton}>
            {!isLiked ? (
              <img src={like} alt="Like" />
            ) : (
              <img src={filledLike} alt="Filled like" />
            )}
            <span>{likes}</span>
          </div>
        </TuwueetOptions>
      </TuwueetInfo>
    </TuwueetWrapper>
  );
}

export default Tuwueet;
