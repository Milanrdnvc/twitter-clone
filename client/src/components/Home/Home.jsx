import CreateTuwueet from './CreateTuwueet';
import Tuwueet from '../shared components/Tuwueet';
import axios from 'axios';
import HomeWrapper, { HomeHeader } from '../styled/HomeStyles';

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
  }
}

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader>Home</HomeHeader>
      <CreateTuwueet getTuwueets={getTuwueets} />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
    </HomeWrapper>
  );
}

export default Home;
