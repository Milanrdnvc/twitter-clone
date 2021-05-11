import CreateTuwueet from './CreateTuwueet';
import Tuwueet from '../shared components/Tuwueet';
import HomeWrapper, { HomeHeader } from '../styled/HomeStyles';
import { useState, useEffect } from 'react';
import { getAuthToken, validateToken, GET } from '../../helpers';

function Home() {
  const [Tuwueets, setTuwueets] = useState(null);

  async function loadTuwueets() {
    let tuwueets;
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (validToken) {
      tuwueets = await GET('tuwueets/all', {
        headers: {
          'X-Auth-Token': token,
        },
      });
      renderTuwueets(tuwueets);
    }
  }

  useEffect(() => {
    loadTuwueets();
  }, []);

  async function renderTuwueets(tuwueets) {
    const token = getAuthToken();
    const validToken = validateToken(token);
    if (!validToken) return;
    const user = await GET('users', {
      headers: {
        'X-Auth-Token': token,
      },
    });
    const userId = user.data.id;
    const allTuwueets = tuwueets.data.tuwueets.map((tuwueet, idx) => {
      const isLiked = Boolean(
        tuwueet.likes.find(user => user.userId === userId)
      );

      return (
        <Tuwueet
          text={tuwueet.text}
          img={tuwueet.img}
          username={tuwueet.username}
          createdAt={tuwueet.createdAt}
          key={idx}
          id={tuwueet._id}
          likesNum={tuwueet.likes.length}
          commentsNum={tuwueet.comments.length}
          liked={isLiked}
          pfp={tuwueet.pfp}
        />
      );
    });
    setTuwueets(allTuwueets.reverse());
  }

  return (
    <HomeWrapper>
      <HomeHeader>Home</HomeHeader>
      <CreateTuwueet loadTuwueets={loadTuwueets} />
      {Tuwueets}
    </HomeWrapper>
  );
}

export default Home;
