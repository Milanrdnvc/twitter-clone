import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import MobileMenu from "./components/MobileMenu";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import "./styles/styles.css";

function App() {
  return (
    <div className="flex max-w-7xl mx-auto min-h-screen text-white bg-[#15202b]">
      <Sidebar />
      <Feed />
      <Profile />

      <MobileMenu />
    </div>
    // <Register />
    // <LogIn />
  );
}

export default App;
