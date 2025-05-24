import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  editProfile,
  sendNotification,
  profileInfo,
  allNotifications,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser); // [✔]
router.post("/auth", authUser); // [✔]
router.post("/logout", logoutUser); // [✔]
router.post("/editProfile", protect, editProfile); // [✔]
router.post("/sendNotification", protect, sendNotification); // [✔]
router.get("/profileInfo", protect, profileInfo); // [✔]
router.get("/allNotifications", protect, allNotifications); // [✔]

export default router;
