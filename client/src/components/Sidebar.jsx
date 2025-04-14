import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

function Sidebar() {
  const userInfo = useSelector((state) => state.auth);

  return (
    <aside className="w-[250px] p-4 border-r border-gray-800 hidden lg:flex flex-col">
      <Link to="/">
        <FaTwitter className="text-3xl mb-4 text-pink-500 cursor-pointer" />
      </Link>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-3 hover:text-pink-500">
          <RiHome7Fill className="text-3xl relative top-[2px] text-pink-500" />
          <span className="text-base font-bold">Home</span>
        </Link>
        <Link to="#" className="flex items-center gap-3 hover:text-pink-500">
          <IoIosNotifications className="text-3xl relative top-[2px] right-[2px] text-pink-500" />
          <span className="text-base font-bold">Notifications</span>
        </Link>
        <Link
          to="/login"
          className="flex items-center gap-3 hover:text-pink-500"
        >
          <IoLogOut className="text-3xl relative top-[2px] left-[1.2px] text-pink-500" />
          <span className="text-base font-bold">
            {userInfo ? "Log Out" : "Log In"}
          </span>
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
