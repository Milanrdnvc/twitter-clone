import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import { AppWrapperStyles } from './styled/AppStyles';

function App() {
  return (
    <AppWrapperStyles>
      <Sidebar />
      <Feed />
    </AppWrapperStyles>
  );
}

export default App;
