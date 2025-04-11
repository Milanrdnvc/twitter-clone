import React from "react";

function Tuwueet({ test }) {
  return (
    <div key={test} className="flex p-4 border-b border-gray-800">
      <div className="w-12 h-12 rounded-full bg-gray-700 mr-4" />
      <div className="flex-1">
        <div className="text-sm text-gray-400">
          <span className="font-bold text-white">User {test}</span> · 1h
        </div>
        <div>This is tweet #{test + 1}!</div>
        <div className="flex gap-4 mt-2 text-gray-500 text-sm">
          <span>💬</span>
          <span>🔁</span>
          <span>❤️</span>
        </div>
      </div>
    </div>
  );
}

export default Tuwueet;
