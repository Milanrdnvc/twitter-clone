import Tuwueet from "../components/Tuwueet";
import Comment from "../components/Comment";
import { useParams } from "react-router-dom";

function CommentPage() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="max-w-2xl mx-auto p-4 text-white">
      {/* Tuwueet */}
      {/* <div className="border-b border-gray-800 pb-4 mb-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gray-700 rounded-full" />
          <div>
            <div className="font-bold">John Doe</div>
            <div className="mt-2">This is the tuwueet content.</div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-2">
          April 3, 2025 at 09:18 AM
        </div>
      </div> */}
      {/* <Tuwueet /> */}

      {/* Comments Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Comments</h2>
        <Comment />
        {/* ... */}
      </div>

      {/* Add Comment Form */}
      <div>
        <textarea
          className="w-full bg-gray-800 p-3 rounded text-white placeholder-gray-400 resize-none"
          rows="3"
          placeholder="Write a comment..."
        />
        <button className="mt-3 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full text-sm font-bold cursor-pointer">
          Comment
        </button>
      </div>
    </div>
  );
}

export default CommentPage;
