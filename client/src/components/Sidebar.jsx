import React from "react";
import { FaTwitter, FaHome } from "react-icons/fa";
import Home from "@mui/icons-material/Home";
import Notifications from "@mui/icons-material/Notifications";
import Logout from "@mui/icons-material/Logout";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <FaTwitter />

      <div className="sidebar-option active">
        <Home />
        <h2>Home</h2>
      </div>

      <div className="sidebar-option">
        <Notifications />
        <h2>Notifications</h2>
      </div>

      <div className="sidebar-option">
        <Logout />
        <h2>Logout</h2>
      </div>
    </div>
  );
}

export default Sidebar;
