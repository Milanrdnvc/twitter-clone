import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <aside className="w-[300px] p-4 hidden lg:flex flex-col h-full overflow-y-auto">
      <div className="bg-[#192734] p-4 rounded-xl">
        <div className="w-20 h-20 rounded-full bg-gray-700 mx-auto mb-4" />

        <h2 className="text-xl font-bold text-center mb-1">
          {userInfo?.username || "Guest"}
        </h2>

        <p className="text-sm text-gray-300 mb-2">User description</p>

        <div className="text-sm text-gray-400 mb-2">📍 Location</div>
        <div className="text-sm text-blue-400 mb-2">
          🔗{" "}
          <a
            href="https://www.google.com"
            className="hover:underline"
            target="#"
          >
            Website
          </a>
        </div>
        <div className="text-sm text-gray-400 mb-4">📅 Joined January 2020</div>

        {/* Edit Profile Button */}
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-1 rounded-full font-semibold cursor-pointer">
          Edit profile
        </button>
      </div>
    </aside>
  );
}

export default Profile;
