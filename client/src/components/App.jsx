import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Gadgets from './Gadgets/Gadgets';
import { AppWrapperStyles } from './styled/AppStyles';

function App() {
  return (
    <AppWrapperStyles>
      <Sidebar />
      <Feed />
      <Gadgets />
    </AppWrapperStyles>
  );
}

export default App;
