import React from "react";
import { FaImage } from "react-icons/fa6";

function CreateTuwueet() {
  return (
    <div className="flex p-4 border-b border-gray-800">
      <div className="w-12 h-12 rounded-full bg-gray-700 mr-4" />
      <div className="flex-1">
        <textarea
          className="w-full  text-white placeholder-gray-500 resize-none outline-none"
          placeholder="What’s happening?"
          rows="2"
        ></textarea>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-4 text-blue-500">
            <FaImage className="text-xl text-pink-500 cursor-pointer" />
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-1 rounded-full cursor-pointer">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTuwueet;
