import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaComment } from "react-icons/fa";

function Tuwueet({ text, created, username, likes, comments }) {
  return (
    <div className="flex p-4 border-b border-gray-800">
      <div className="w-12 h-12 rounded-full bg-gray-700 mr-4" />
      <div className="flex-1">
        <div className="text-sm text-gray-400">
          <span className="font-bold text-white">{username} </span> · {created}
        </div>
        <div>{text}</div>
        <div className="flex gap-3 mt-2 text-sm">
          <CiHeart className="text-xl text-pink-500 cursor-pointer" />
          <span>{likes.length}</span>
          <FaComment className="text-pink-500 cursor-pointer relative top-[3px]" />
          <span>{comments.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Tuwueet;
