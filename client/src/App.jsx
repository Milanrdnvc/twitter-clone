import { useEffect } from "react";
import socket, { connectSocket } from "./utils/socket";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/styles.css";

function App() {
  useEffect(() => {
    connectSocket(socket);
  }, []);

  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
