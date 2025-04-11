import React from "react";

function Profile() {
  return (
    <aside className="w-[300px] p-4 hidden lg:flex flex-col h-full overflow-y-auto">
      <div className="bg-[#192734] p-4 rounded-xl">
        <div className="w-20 h-20 rounded-full bg-gray-700 mx-auto mb-4" />

        <h2 className="text-xl font-bold text-center mb-1">John Doe</h2>

        <p className="text-sm text-gray-300 mb-2">
          Full-stack dev. Coffee enthusiast ☕. Building cool stuff with code.
        </p>

        <div className="text-sm text-gray-400 mb-2">📍 Belgrade, Serbia</div>
        <div className="text-sm text-blue-400 mb-2">
          🔗{" "}
          <a href="https://johndoe.dev" className="hover:underline">
            johndoe.dev
          </a>
        </div>
        <div className="text-sm text-gray-400 mb-4">📅 Joined January 2020</div>

        {/* Edit Profile Button */}
        <button className="w-full bg-pink-500 border border-gray-600 hover:bg-pink-600 text-white py-1 rounded-full font-semibold cursor-pointer">
          Edit profile
        </button>
      </div>
    </aside>
  );
}

export default Profile;
