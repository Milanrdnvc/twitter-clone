import CreateTuwueet from './CreateTuwueet';
import Tuwueet from '../shared components/Tuwueet';
import axios from 'axios';
import HomeWrapper, { HomeHeader } from '../styled/HomeStyles';
import { useState } from 'react';

function Home() {
  const [Tuwueets, setTuwueets] = useState(null);

  async function getTuwueets() {
    let tuwueets;
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
      tuwueets = await axios.get('tuwueets/all', {
        headers: {
          'X-Auth-Token': token,
        },
      });
      renderTuwueets(tuwueets);
    }
  }

  function renderTuwueets(tuwueets) {
    const allTuwueets = tuwueets.data.tuwueets.map((tuwueet, idx) => {
      return (
        <Tuwueet
          text={tuwueet.text}
          img={tuwueet.img}
          createdAt={tuwueet.createdAt}
          key={idx}
        />
      );
    });
    setTuwueets(allTuwueets.reverse());
  }

  return (
    <HomeWrapper>
      <HomeHeader>Home</HomeHeader>
      <CreateTuwueet getTuwueets={getTuwueets} />
      {Tuwueets}
    </HomeWrapper>
  );
}

export default Home;
