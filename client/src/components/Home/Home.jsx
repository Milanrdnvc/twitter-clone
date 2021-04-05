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

  function renderTuwueets(tuwueets) {
    const allTuwueets = tuwueets.data.tuwueets.map((tuwueet, idx) => {
      return (
        <Tuwueet
          text={tuwueet.text}
          img={tuwueet.img}
          username={tuwueet.username}
          createdAt={tuwueet.createdAt}
          key={idx}
          id={tuwueet._id}
          likesNum={tuwueet.likes.length}
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
