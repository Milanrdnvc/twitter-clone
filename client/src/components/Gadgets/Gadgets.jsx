import Search from './Search';
import Trends from './Trends';
import GadgetsWrapper from '../styled/GadgetsStyles';

function Gadgets() {
  return (
    <GadgetsWrapper>
      <Search />
      <Trends />
    </GadgetsWrapper>
  );
}

export default Gadgets;
