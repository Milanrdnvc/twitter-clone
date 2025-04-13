import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/styles.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
