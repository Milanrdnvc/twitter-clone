import CreateTuwueet from './CreateTuwueet';
import Tuwueet from './Tuwueet';
import HomeWrapper, { HomeHeader } from '../styled/HomeStyles';

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader>Home</HomeHeader>
      <CreateTuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
      <Tuwueet />
    </HomeWrapper>
  );
}

export default Home;
