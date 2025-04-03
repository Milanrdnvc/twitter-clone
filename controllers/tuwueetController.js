import Tuwueet from "../models/tuwueet.js";
import asyncHandler from "express-async-handler";

const createTuwueet = asyncHandler(async (req, res) => {
  const { text, img, username, pfp, id } = req.body;

  if (!text || !username || !id) {
    res.status(400);
    throw new Error("Text and username are required (and id for now)");
  }

  const newTuwueet = new Tuwueet({
    text,
    img: img || "no img",
    userId: id,
    username: username,
    likes: [],
    comments: [],
    pfp: pfp || "no pfp",
  });

  await newTuwueet.save();

  res.json({ newTuwueet });
});

export { createTuwueet };
