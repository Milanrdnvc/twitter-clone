import CreateTuwueet from './CreateTuwueet';
import Tuwueet from './Tuwueet';
import FeedWrapper from '../../styled/FeedStyles';
import axios from 'axios';
import loadingGif from '../../../pictures/loading.gif';
import moment from 'moment';
import { FeedHeader } from '../../styled/FeedStyles';
import { useEffect, useState, useRef } from 'react';

const CUSTOM_LOCALE_STRINGS = {
  future: 'in %s',
  past: '%s ago',
  s: 'seconds',
  m: 'a minute',
  mm: '%d minutes',
  h: 'an hour',
  hh: '%d hours',
  d: 'a day',
  dd: '%d days',
  M: 'a month',
  MM: '%d months',
  y: 'a year',
  yy: '%d years',
};

function Feed() {
  const [tuwueetsData, setTuwueetsData] = useState([]);
  const loadingGifImg = useRef(null);
  const tuwueets = tuwueetsData
    .map(({ text, img, createdAt, updatedAt }, idx) => {
      return (
        <Tuwueet
          text={text}
          img={img}
          createdAt={moment(createdAt)
            .fromNow()
            .replace(' ', '')
            .replace('an', '1')
            .replace('minutes', 'm')
            .replace('hour', 'h')
            .replace('hs', 'h')
            .replace('ago', '')}
          updatedAt={updatedAt}
          key={idx}
        />
      );
    })
    .reverse();

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
      loadingGifImg.current.style.display = 'none';
    }
  }

  useEffect(() => {
    getTuwueets();
  }, []);

  return (
    <FeedWrapper>
      <FeedHeader>Latest Tuwueets</FeedHeader>
      <CreateTuwueet getTuwueets={getTuwueets} />
      <img ref={loadingGifImg} src={loadingGif} alt="loading" width="200px" />
      {tuwueets}
    </FeedWrapper>
  );
}

export default Feed;
