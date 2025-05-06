import Tuwueet from "../models/tuwueet.js";
import asyncHandler from "express-async-handler";

const getAllTuwueets = asyncHandler(async (_, res) => {
  const tuwueets = await Tuwueet.find();
  res.json({ tuwueets });
});

const allComments = asyncHandler(async (req, res) => {
  const tuwueetId = req.params.id;

  const tuwueet = await Tuwueet.findOne({ _id: tuwueetId });

  if (!tuwueet) {
    res.status(400);
    throw new Error("Tuwueet with that ID doesn't exist");
  }

  const comments = tuwueet.comments;

  res.json({ comments });
});

const getTuwueet = asyncHandler(async (req, res) => {
  const tuwueet = await Tuwueet.findOne({ _id: req.params.id });

  if (!tuwueet) {
    res.status(400);
    throw new Error("Tuwueet with that ID doesn't exist");
  }

  res.json({ tuwueet });
});

const comment = asyncHandler(async (req, res) => {
  const { tuwueetId, text, img, username, createdAt, userImg } = req.body;

  if (!tuwueetId) {
    res.status(400);
    throw new Error("Tuwueet ID not provided");
  }

  if (!text) {
    res.status(400);
    throw new Error("Your comment must include some text");
  }

  const tuwueet = await Tuwueet.findOne({ _id: tuwueetId });
  const newComment = {
    tuwueetId,
    userImg,
    text,
    createdAt,
    img: img || "no img",
    createdBy: username,
  };

  const comments = tuwueet.comments;
  comments.push(newComment);
  tuwueet.comments = comments;

  await tuwueet.save();
  res.json({ comments });
});

const like = asyncHandler(async (req, res) => {
  const { tuwueetId, like } = req.body;

  if (!tuwueetId) {
    res.status(400);
    throw new Error("Tuwueet ID not provided");
  }

  const tuwueet = await Tuwueet.findOne({ _id: tuwueetId });
  const likes = tuwueet.likes;

  if (like) {
    likes.push(req.user._id);
    tuwueet.likes = likes;
    await tuwueet.save();
    res.json({ likes });
  } else {
    const filteredLikes = likes.filter(
      (user) => String(user) !== String(req.user._id)
    );

    tuwueet.likes = filteredLikes;
    await tuwueet.save();
    res.json({ filteredLikes });
  }
});

const createTuwueet = asyncHandler(async (req, res) => {
  const { text, img, username, pfp } = req.body;

  if (!text || !username) {
    res.status(400);
    throw new Error("Text and username are required");
  }

  const newTuwueet = new Tuwueet({
    text,
    img: img || "no img",
    userId: req.user._id,
    username: username,
    likes: [],
    comments: [],
    pfp: pfp || "no pfp",
  });

  await newTuwueet.save();

  res.json({ newTuwueet });
});

export {
  createTuwueet,
  like,
  comment,
  getTuwueet,
  allComments,
  getAllTuwueets,
};
