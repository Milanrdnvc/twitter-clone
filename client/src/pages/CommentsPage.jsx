import Tuwueet from "../components/Tuwueet";
import Comment from "../components/Comment";
import { useParams } from "react-router-dom";
import { useGetTuwueetQuery } from "../slices/tuwueetsApiSlice";

function CommentPage() {
  const { id } = useParams();

  const { data, isLoading } = useGetTuwueetQuery({ id });

  return (
    <div className="max-w-2xl mx-auto p-4 text-white">
      {data && (
        <Tuwueet
          key={data.tuwueet._id}
          text={data.tuwueet.text}
          created={data.tuwueet.createdAt}
          username={data.tuwueet.username}
          likes={data.tuwueet.likes}
          comments={data.tuwueet.comments}
          id={data.tuwueet._id}
        />
      )}

      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Comments</h2>
        <Comment />
        {/* ... */}
      </div>

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
