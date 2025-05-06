import React from "react";
import { timeAgo } from "../utils/date";

function Comment({ createdBy, text, created }) {
  return (
    <div className="mb-4 border-b border-gray-800 pb-4">
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-gray-700 rounded-full" />
        <div>
          <div className="font-semibold text-sm">{createdBy}</div>
          <div className="text-gray-300 text-sm">{text}</div>
          <div className="text-xs text-gray-500 mt-1">{timeAgo(created)}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
