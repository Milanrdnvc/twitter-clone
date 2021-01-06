import CreateTuwueet from './CreateTuwueet';
import Tuwueet from './Tuwueet';
import FeedWrapper from '../../styled/FeedStyles';
import axios from 'axios';
import { FeedHeader } from '../../styled/FeedStyles';
import { useEffect, useState } from 'react';

function Feed() {
  const [tuwueetsData, setTuwueetsData] = useState([]);
  const tuwueets = tuwueetsData.map(
    ({ text, img, createdAt, updatedAt }, idx) => {
      return (
        <Tuwueet
          text={text}
          img={img}
          createdAt={createdAt}
          updatedAt={updatedAt}
          key={idx}
        />
      );
    }
  );

  async function getTuwueets() {
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
      const tuwueets = await axios.get('tuwueets/all', {
        headers: {
          'X-Auth-Token': token,
        },
      });
      setTuwueetsData(tuwueets.data.tuwueets);
    }
  }

  useEffect(() => {
    getTuwueets();
  }, []);

  return (
    <FeedWrapper>
      <FeedHeader>Latest Tuwueets</FeedHeader>
      <CreateTuwueet getTuwueets={getTuwueets} />
      {tuwueets}
    </FeedWrapper>
  );
}

export default Feed;
