import express from "express";
import {
  createTuwueet,
  like,
  comment,
} from "../controllers/tuwueetController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", protect, createTuwueet);

router.get("/", (req, res) => {
  res.json({ msg: "tuwueet get test" });
});

router.post("/like", protect, like);

router.post("/comment", protect, comment);

// router.post("/", auth, async (req, res) => {
//   try {
//     const tuwueet = await Tuwueet.findOne({ _id: req.body.id });
//     res.json({ tuwueet });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.post("/allComments", auth, async (req, res) => {
//   try {
//     const { tuwueetId } = req.body;
//     if (!tuwueetId)
//       return res.status(400).json({ msg: "Tuwueet ID not provided" });
//     const tuwueets = await Tuwueet.findOne({ _id: tuwueetId });
//     const comments = tuwueets.comments;
//     res.json({ comments });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get("/all", async (_, res) => {
//   try {
//     const tuwueets = await Tuwueet.find();
//     res.json({ tuwueets });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

export default router;
