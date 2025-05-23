import Comments from "../components/Comments";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import MobileMenu from "../components/MobileMenu";

function CommentPage() {
  return (
    <div className="flex max-w-7xl mx-auto min-h-screen text-white bg-[#15202b]">
      <Sidebar />
      <Comments />
      <Profile />

      <MobileMenu />
    </div>
  );
}

export default CommentPage;
