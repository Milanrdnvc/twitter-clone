import express from "express";
import {
  createTuwueet,
  like,
  comment,
  getTuwueet,
  allComments,
  getAllTuwueets,
} from "../controllers/tuwueetController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", protect, createTuwueet); // [✔]
router.post("/like", protect, like); // [...]
router.post("/comment", protect, comment);
router.get("/all", getAllTuwueets); // [✔]
router.get("/:id", getTuwueet);
router.get("/allComments", allComments);

export default router;
