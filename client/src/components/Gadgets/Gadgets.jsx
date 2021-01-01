import Search from './Search';
import Trends from './Trends';
import WhoToFollow from './WhoToFollow';
import GadgetsStyles from '../styled/GadgetsStyles';

function Gadgets() {
  return (
    <GadgetsStyles>
      <Search />
      <Trends />
      <WhoToFollow />
    </GadgetsStyles>
  );
}

export default Gadgets;
