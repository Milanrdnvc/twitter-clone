import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/auth", authUser);

router.post("/logout", logoutUser);

router.get("/profile", protect, (req, res) => {
  res.json({ msg: "user profile" });
});

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

// router.post('/editProfile', auth, async (req, res) => {
//   try {
//     const { pfp, bio, location, website } = req.body;
//     const user = await User.findOneAndUpdate(
//       { _id: req.user },
//       {
//         pfp,
//         bio,
//         location,
//         website,
//       },
//       { new: true }
//     );
//     res.json({ user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.post('/sendNotification', auth, async (req, res) => {
//   try {
//     const newNotification = req.body;
//     const tuwueet = await Tuwueet.findById(newNotification.tuwueetId);
//     const user = await User.findById(tuwueet.userId);
//     const notifications = user.notifications;
//     notifications.push(newNotification);
//     user.notifications = notifications;
//     await user.save();
//     res.json({ notifications, userId: tuwueet.userId });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get('/profileInfo', auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user);
//     res.json({
//       pfp: user.pfp,
//       bio: user.bio,
//       location: user.location,
//       website: user.website,
//       joined: user.createdAt,
//     });
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

// router.get('/allNotifications', auth, async (req, res) => {
//   try {
//     const notifications = (await User.findById(req.user)).notifications;
//     res.json({ notifications });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get('/', auth, async (req, res) => {
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
