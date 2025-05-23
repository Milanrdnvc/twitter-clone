import React, { useState } from "react";
import Notifications from "./Notifications";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiHome7Fill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function MobileMenu() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    console.log("test");
  };

  return (
    <>
      <Notifications
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#15202b] border-t border-gray-800 p-4 flex justify-around">
        <Link to="/" className="flex items-center gap-3 hover:text-pink-500">
          <RiHome7Fill className="text-3xl relative top-[2px] text-pink-500" />
        </Link>
        <Link
          to="#"
          className="flex items-center gap-3 hover:text-pink-500"
          onClick={() => setNotificationsOpen(true)}
        >
          <IoIosNotifications className="text-3xl relative top-[2px] right-[2px] text-pink-500" />
        </Link>
        {userInfo ? (
          <Link
            to="#"
            className="flex items-center gap-3 hover:text-pink-500"
            onClick={logoutHandler}
          >
            <IoLogOut className="text-3xl relative top-[2px] left-[1.2px] text-pink-500" />
          </Link>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-3 hover:text-pink-500"
          >
            <IoLogOut className="text-3xl relative top-[2px] left-[1.2px] text-pink-500" />
          </Link>
        )}
        <Link
          to="/profile"
          className="flex items-center gap-3 hover:text-pink-500"
        >
          <CgProfile className="text-3xl relative top-[2px] text-pink-500" />
        </Link>
      </div>
    </>
  );
}

export default MobileMenu;
