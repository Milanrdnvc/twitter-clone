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

router.post("/register", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/editProfile", protect, editProfile);
router.post("/sendNotification", protect, sendNotification);
router.get("/profileInfo", profileInfo);
router.get("/allNotifications", protect, allNotifications);

// router.post('/tokenIsValid', async (req, res) => {
//   try {
//     const token = req.header('x-auth-token');
//     if (!token) return res.json(false);
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     if (!verified) return res.json(false);
//     const user = await User.findById(verified.id);
//     if (!user) return res.json(false);
//     return res.json(true);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get('/profileInfo/:id', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.json({
//       bio: user.bio,
//       location: user.location,
//       website: user.website,
//       joined: user.createdAt,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get('/', auth, async (req, res) => {
// same question as the profileInfo route
//   try {
//     const user = await User.findById(req.user);
//     res.json({
//       username: user.username,
//       id: user._id,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

export default router;
