import React from "react";
import { RiHome7Fill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function MobileMenu() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#15202b] border-t border-gray-800 p-4 flex justify-around">
      <a href="#" className="text-blue-400">
        <RiHome7Fill className="text-3xl relative top-[2px] text-pink-500" />
      </a>
      <a href="#" className="text-blue-400">
        <IoIosNotifications className="text-3xl relative top-[2px] text-pink-500" />
      </a>
      <a href="#" className="text-blue-400">
        <IoLogOut className="text-3xl relative top-[2px] text-pink-500" />
      </a>
      <a href="#" className="text-blue-400">
        <CgProfile className="text-3xl relative top-[2px] text-pink-500" />
      </a>
    </div>
  );
}

export default MobileMenu;
