import React from "react";
import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

function Sidebar() {
  return (
    <aside className="w-[250px] p-4 border-r border-gray-800 hidden lg:flex flex-col">
      <FaTwitter className="text-3xl mb-4 text-pink-500 cursor-pointer" />
      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-3 hover:text-pink-500">
          <RiHome7Fill className="text-3xl relative top-[2px] text-pink-500" />
          <span className="text-base font-bold">Home</span>
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-pink-500">
          <IoIosNotifications className="text-3xl relative top-[2px] right-[2px] text-pink-500" />
          <span className="text-base font-bold">Notifications</span>
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-pink-500">
          <IoLogOut className="text-3xl relative top-[2px] left-[1.2px] text-pink-500" />
          <span className="text-base font-bold">Log Out</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
