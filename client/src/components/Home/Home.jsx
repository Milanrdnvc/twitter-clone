import CreateTuwueet from './CreateTuwueet';
import Tuwueet from '../shared components/Tuwueet';
import loading from '../../pictures/loading.gif';
import HomeWrapper, { HomeHeader } from '../styled/HomeStyles';
import { useState, useEffect } from 'react';
import { getAuthToken, validateToken, GET } from '../../helpers';

function Home() {
  const [Tuwueets, setTuwueets] = useState(null);

  async function loadTuwueets() {
    const tuwueets = (
      await GET('tuwueets/all', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).data.tuwueets;
    renderTuwueets(tuwueets);
  }

  async function renderTuwueets(tuwueets) {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    let userId = null;
    if (validToken) {
      const user = await GET('/users', {
        headers: {
          'X-Auth-Token': token,
        },
      });
      userId = user.data.id;
    }
    const allTuwueets = tuwueets.map((tuwueet, idx) => {
      const isLiked = Boolean(
        tuwueet.likes.find(user => user.userId === userId)
      );

      return (
        <Tuwueet
          text={tuwueet.text}
          img={tuwueet.img}
          username={tuwueet.username}
          createdAt={tuwueet.createdAt}
          id={tuwueet._id}
          likesNum={tuwueet.likes.length}
          commentsNum={tuwueet.comments.length}
          liked={isLiked}
          pfp={tuwueet.pfp}
          userId={tuwueet.userId}
          key={idx}
          loggedIn={userId}
        />
      );
    });
    setTuwueets(allTuwueets.reverse());
  }

  useEffect(() => {
    loadTuwueets();
  }, []);

  return (
    <HomeWrapper>
      <HomeHeader>Home</HomeHeader>
      <CreateTuwueet loadTuwueets={loadTuwueets} />
      {Tuwueets || <img src={loading} alt="Loading" width="200px" />}
    </HomeWrapper>
  );
}

export default Home;
