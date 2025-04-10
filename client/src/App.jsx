import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import MobileMenu from "./components/MobileMenu";
import "./styles/styles.css";

function App() {
  return (
    <div className="flex h-screen w-screen text-white bg-black overflow-hidden">
      <Sidebar />
      <Feed />
      <Profile />

      <MobileMenu />
    </div>
  );
}

export default App;
