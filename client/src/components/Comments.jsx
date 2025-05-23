import { useState } from "react";
import Tuwueet from "../components/Tuwueet";
import Comment from "../components/Comment";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetTuwueetQuery,
  useGetAllCommentsQuery,
  useCommentMutation,
} from "../slices/tuwueetsApiSlice";
import { toast } from "react-toastify";
import { IoArrowBack } from "react-icons/io5";

function CommentPage() {
  const { userInfo } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetTuwueetQuery({ id });
  const comments = useGetAllCommentsQuery({ id });
  const isLoadingC = comments.isLoading;
  const [comment, { isLoading, error }] = useCommentMutation();

  const handleCreateComment = async () => {
    try {
      const res = await comment({
        tuwueetId: id,
        text,
        img: "N/A",
        username: userInfo?.username,
        createdAt: new Date(),
        userImg: "N/A",
      }).unwrap();

      setText("");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="flex-1 flex flex-col border-x border-gray-800 h-full">
      <div className="flex items-center gap-4 p-4 border-b border-gray-800 sticky top-0 bg-[#15202b] z-10">
        <button
          onClick={() => navigate("/")}
          className="text-white text-xl hover:text-pink-500"
        >
          <IoArrowBack className="cursor-pointer" />
        </button>
        <h1 className="text-xl font-bold">Tuwueet</h1>
      </div>

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
        <h2 className="text-lg font-bold m-4">Comments</h2>

        {isLoadingC && <p>Loading...</p>}

        {comments.data &&
          comments.data.comments
            .map((comment, idx) => (
              <Comment
                key={idx}
                createdBy={comment.createdBy}
                text={comment.text}
                created={comment.createdAt}
              />
            ))
            .reverse()}
      </div>

      <div>
        <textarea
          value={text}
          className="w-full bg-gray-800 p-3 rounded text-white placeholder-gray-400 resize-none"
          rows="3"
          placeholder="Write a comment..."
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="mt-3 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full text-sm font-bold cursor-pointer"
          onClick={handleCreateComment}
        >
          Comment
        </button>
      </div>
    </div>
  );
}

export default CommentPage;
