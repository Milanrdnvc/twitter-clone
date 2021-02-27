import pfp from '../../pictures/pfp.jpg';
import post from '../../pictures/post.png';
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
          <strong>{'Milanrdnvc'}</strong> <em>{'Jan 20. 2021.'}</em>
          <br />
          {
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt provident quae voluptatem distinctio repellat possimus? Quod dolorum nisi assumenda quis, aliquam nostrum ducimus, quas ratione commodi nulla, aut vero necessitatibus!'
          }
        </p>
        {img !== 'no img' && <img src={post} alt="Tuwueet post" />}
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
