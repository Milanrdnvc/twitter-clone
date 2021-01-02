import Search from './Search';
import Trends from './Trends';
import WhoToFollow from './WhoToFollow';
import GadgetsWrapper from '../styled/GadgetsStyles';

function Gadgets() {
  return (
    <GadgetsWrapper>
      <Search />
      <Trends />
      <WhoToFollow />
    </GadgetsWrapper>
  );
}

export default Gadgets;
