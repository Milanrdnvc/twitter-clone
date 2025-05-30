import React, { useState } from "react";
import socket, { emitTuwueet } from "../utils/socket";
import { useSelector } from "react-redux";
import { FaImage } from "react-icons/fa6";
import { useCreateMutation } from "../slices/tuwueetsApiSlice";
import { toast } from "react-toastify";

function CreateTuwueet() {
  const [previewSource, setPreviewSource] = useState("");
  const [text, setText] = useState("");
  const { username } = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : { username: "Guest" }
  );
  const [create, { isLoading, error }] = useCreateMutation();

  const handleCreateTuwueet = async () => {
    try {
      const res = await create({
        text,
        img: previewSource,
        username,
        pfp: "N/A",
      }).unwrap();

      setText("");
      setPreviewSource("");
      emitTuwueet(socket, "my tuwueet");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <div className="flex p-4 border-b border-gray-800">
      <div className="w-12 h-12 rounded-full bg-gray-700 mr-4" />
      <div className="flex-1">
        <textarea
          value={text}
          className="w-full text-white placeholder-gray-500 resize-none outline-none bg-transparent"
          placeholder="What's happening?"
          rows="2"
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-4 text-blue-500">
            <label htmlFor="image-upload" className="cursor-pointer">
              <FaImage className="text-xl text-pink-500" />
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              className="hidden"
              onChange={handleFileInputChange}
            />
          </div>
          <button
            disabled={isLoading}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-1 rounded-full cursor-pointer"
            onClick={handleCreateTuwueet}
          >
            {isLoading ? "Posting..." : "Post"}
          </button>
        </div>
        {previewSource && (
          <img src={previewSource} style={{ height: "300px" }} />
        )}
      </div>
    </div>
  );
}

export default CreateTuwueet;
