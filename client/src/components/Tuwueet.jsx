import React from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaComment } from "react-icons/fa";
import { useLikeMutation } from "../slices/tuwueetsApiSlice";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Tuwueet({ text, created, username, likes, comments, id }) {
  const { userInfo } = useSelector((state) => state.auth);

  console.log(likes);

  const timeAgo = (date) => {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    const deltaSeconds = Math.floor((new Date() - new Date(date)) / 1000);

    const ranges = {
      year: 3600 * 24 * 365,
      month: 3600 * 24 * 30,
      week: 3600 * 24 * 7,
      day: 3600 * 24,
      hour: 3600,
      minute: 60,
    };

    for (const [unit, secondsInUnit] of Object.entries(ranges)) {
      if (deltaSeconds >= secondsInUnit) {
        const value = Math.floor(deltaSeconds / secondsInUnit);
        return rtf.format(-value, unit);
      }
    }

    return "just now";
  };

  const [like, { isLoading, error }] = useLikeMutation();

  const handleLike = async (toLike) => {
    try {
      const res = await like({
        tuwueetId: id,
        like: toLike,
      }).unwrap();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="flex p-4 border-b border-gray-800">
      <div className="w-12 h-12 rounded-full bg-gray-700 mr-4" />
      <div className="flex-1">
        <div className="text-sm text-gray-400">
          <span className="font-bold text-white">{username} </span> ·{" "}
          {timeAgo(created)}
        </div>
        <div>{text}</div>
        <div className="flex gap-3 mt-2 text-sm">
          {likes.includes(userInfo?._id) ? (
            <FaHeart
              className="text-xl text-pink-500 cursor-pointer"
              onClick={() => handleLike(false)}
            />
          ) : (
            <CiHeart
              className="text-xl text-pink-500 cursor-pointer"
              onClick={() => handleLike(true)}
            />
          )}

          <span>{likes.length}</span>
          <Link to={`/comments/${id}`}>
            <FaComment className="text-pink-500 cursor-pointer relative top-[3px]" />
          </Link>
          <span>{comments.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Tuwueet;
