import React from "react";

function Comment() {
  return (
    <div className="mb-4 border-b border-gray-800 pb-4">
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-gray-700 rounded-full" />
        <div>
          <div className="font-semibold text-sm">Jane Smith</div>
          <div className="text-gray-300 text-sm">Nice tuwueet!</div>
          <div className="text-xs text-gray-500 mt-1">2h ago</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
