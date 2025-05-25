import React from "react";
import Notification from "./Notification";
import { useAllNotificationsQuery } from "../slices/usersApiSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Notifications({ open, onClose }) {
  const { userInfo } = useSelector((state) => state.auth);
  const { data } = useAllNotificationsQuery(userInfo._id);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-[#192734] p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <ul className="space-y-3">
          {data &&
            data.notifications
              .map((notification, idx) => {
                return (
                  <Link to={`/comments/${notification.tuwueetId}`} key={idx}>
                    <Notification
                      info={`You got a ${notification.type} from ${notification.sentByUsername}`}
                      key={idx}
                    />
                  </Link>
                );
              })
              .reverse()}
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
