import express from "express";
import {
  uploadTuwueetImg,
  uploadCommentImg,
  uploadPfpImg,
} from "../controllers/uploadController";

const router = express.Router();

router.post("/tuwueet", uploadTuwueetImg);
router.post("/comment", uploadCommentImg);
router.post("/pfp", uploadPfpImg);

export default router;
