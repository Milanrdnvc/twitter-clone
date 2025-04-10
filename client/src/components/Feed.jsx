import React from "react";

function Feed() {
  return (
    <main className="flex-1 flex flex-col border-x border-gray-800 h-full">
      {/* Sticky Top Nav */}
      <div className="p-4 border-b border-gray-800 font-bold text-xl sticky top-0 bg-black z-10">
        Home
      </div>

      {/* Feed Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Tweet Composer */}
        <div className="flex p-4 border-b border-gray-800">
          <div className="w-12 h-12 rounded-full bg-gray-700 mr-4" />
          <div className="flex-1">
            <textarea
              className="w-full bg-black text-white placeholder-gray-500 resize-none outline-none"
              placeholder="What’s happening?"
              rows="2"
            ></textarea>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-4 text-blue-500">
                <span>📷</span>
                <span>🎥</span>
                <span>📊</span>
                <span>😊</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-1 rounded-full">
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Tweets */}
        {[...Array(30)].map((_, i) => (
          <div key={i} className="flex p-4 border-b border-gray-800">
            <div className="w-12 h-12 rounded-full bg-gray-700 mr-4" />
            <div className="flex-1">
              <div className="text-sm text-gray-400">
                <span className="font-bold text-white">User {i}</span> · 1h
              </div>
              <div>This is tweet #{i + 1}!</div>
              <div className="flex gap-4 mt-2 text-gray-500 text-sm">
                <span>💬</span>
                <span>🔁</span>
                <span>❤️</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Feed;
