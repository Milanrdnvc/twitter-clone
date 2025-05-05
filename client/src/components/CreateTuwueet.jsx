import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaImage } from "react-icons/fa6";
import { useCreateMutation } from "../slices/tuwueetsApiSlice";
import { toast } from "react-toastify";

function CreateTuwueet() {
  const [text, setText] = useState("");
  const { username } = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : { username: "Guest" }
  );

  const [create, { isLoading, error }] = useCreateMutation();

  const handleCreateTuwueet = async () => {
    try {
      const res = await create({
        text,
        img: "N/A",
        username,
        pfp: "N/A",
      }).unwrap();

      setText("");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="flex p-4 border-b border-gray-800">
      <div className="w-12 h-12 rounded-full bg-gray-700 mr-4" />
      <div className="flex-1">
        <textarea
          value={text}
          className="w-full  text-white placeholder-gray-500 resize-none outline-none"
          placeholder="What's happening?"
          rows="2"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-4 text-blue-500">
            <FaImage className="text-xl text-pink-500 cursor-pointer" />
          </div>
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-1 rounded-full cursor-pointer"
            onClick={handleCreateTuwueet}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTuwueet;
