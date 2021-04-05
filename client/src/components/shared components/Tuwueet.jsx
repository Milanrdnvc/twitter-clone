import pfp from '../../pictures/pfp.jpg';
import like from '../../pictures/like.svg';
import comment from '../../pictures/comment.svg';
import axios from 'axios';
import UserContext from '../../context/UserContext';
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
    let token = localStorage.getItem('auth-token');
    if (token == null) {
      localStorage.setItem('auth-token', '');
      token = '';
    }
    const tokenRes = await axios.post('users/tokenIsValid', null, {
      headers: {
        'X-Auth-Token': token,
      },
    });
    if (tokenRes.data) {
      try {
        const likes = (
          await axios.post(
            '/tuwueets/like',
            { userId: userData.user.id, tuwueetId: id },
            {
              headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': token,
              },
            }
          )
        ).data.updatedTuwueet.likes;
        const liked = likes.find(userId => userId.id === userData.user.id);
        if (liked) setLikes(prev => prev - 1);
        else setLikes(prev => prev + 1);
      } catch (err) {
        console.log(err.message);
      }
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
