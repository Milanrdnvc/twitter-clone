import pfp from '../../pictures/pfp.jpg';
import like from '../../pictures/like.svg';
import comment from '../../pictures/comment.svg';
import {
  TuwueetWrapper,
  TuwueetInfo,
  TuwueetPfp,
  TuwueetOptions,
} from '../styled/HomeStyles';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';

function likeTuwueet() {
  console.log('hello');
}

function Tuwueet({ text, img, createdAt }) {
  const { userData } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (userData.user) {
      setUsername(userData.user.username);
    }
  }, [userData]);

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
            <span>122</span>
          </div>
        </TuwueetOptions>
      </TuwueetInfo>
    </TuwueetWrapper>
  );
}

export default Tuwueet;
