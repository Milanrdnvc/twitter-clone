import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Gadgets from './Gadgets/Gadgets';
import { AppWrapper } from './styled/AppStyles';

function App() {
  return (
    <AppWrapper>
      <Sidebar />
      <Feed />
      <Gadgets />
    </AppWrapper>
  );
}

export default App;
