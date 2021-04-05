import pfp from '../../pictures/pfp.jpg';
import like from '../../pictures/like.svg';
import comment from '../../pictures/comment.svg';
import UserContext from '../../context/UserContext';
import { getAuthToken, validateToken, POST } from '../../helpers';
import { useContext, useState } from 'react';
import {
  TuwueetWrapper,
  TuwueetInfo,
  TuwueetPfp,
  TuwueetOptions,
} from '../styled/HomeStyles';

function Tuwueet({ text, img, createdAt, username, id, likesNum }) {
  const [likes, setLikes] = useState(likesNum);
  const { userData } = useContext(UserContext);

  async function toggleLikeTuwueet(action) {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const likes = (
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
    ).data.updatedTuwueet.likes.length;
    setLikes(likes);
  }

  async function handleLikeButton() {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const tuwueet = await POST(
      'tuwueets/',
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

  return (
    <TuwueetWrapper>
      <TuwueetPfp src={pfp} />
      <TuwueetInfo>
        <p>
          <strong>{username}</strong> <em>{createdAt}</em>
          <br />
          {text}
        </p>
        {img !== 'no img' && <img src={img} alt="Tuwueet post" />}
        <TuwueetOptions>
          <div>
            <img src={comment} alt="Comment" />
            <span>122</span>
          </div>
          <div onClick={handleLikeButton}>
            <img src={like} alt="Like" />
            <span>{likes}</span>
          </div>
        </TuwueetOptions>
      </TuwueetInfo>
    </TuwueetWrapper>
  );
}

export default Tuwueet;
