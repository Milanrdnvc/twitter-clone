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

  async function likeTuwueet() {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (validToken) {
      const likes = (
        await POST(
          '/tuwueets/like',
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
          <div onClick={likeTuwueet}>
            <img src={like} alt="Like" />
            <span>{likes}</span>
          </div>
        </TuwueetOptions>
      </TuwueetInfo>
    </TuwueetWrapper>
  );
}

export default Tuwueet;
