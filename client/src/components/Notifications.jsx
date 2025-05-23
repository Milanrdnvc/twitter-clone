import React from "react";

function Notifications({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div
        className="bg-[#192734] p-6 rounded-lg shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <ul className="space-y-3">
          <li className="p-3 bg-[#253341] rounded">
            📢 You have a new follower!
          </li>
          <li className="p-3 bg-[#253341] rounded">
            ❤️ Someone liked your tuwueet!
          </li>
          <li className="p-3 bg-[#253341] rounded">💬 You got a reply!</li>
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Notifications;
