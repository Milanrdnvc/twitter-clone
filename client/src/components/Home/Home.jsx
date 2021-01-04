import Sidebar from '../shared components/Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Gadgets from './Gadgets/Gadgets';
import HomeWrapper from '../styled/HomeStyles';

function Home() {
  return (
    <HomeWrapper>
      <Sidebar />
      <Feed />
      <Gadgets />
    </HomeWrapper>
  );
}

export default Home;
