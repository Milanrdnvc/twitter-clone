import User from "../models/user.js";
import Tuwueet from "../models/tuwueet.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

const allNotifications = asyncHandler(async (req, res) => {
  const notifications = (await User.findById(req.user._id)).notifications;
  res.json({ notifications });
});

const profileInfo = asyncHandler(async (req, res) => {
  // does this get the info of me (then I can get the id with req.user._id) or does it get the info of arbitrary user
  // (then I need to send the id with the request, but how do I get that id from the front-end?)
  // const user = await User.findById(req.userId);
  // if (!user) throw new Error("No such user exists");

  // for now, it's for the current logged in user
  res.json({
    pfp: req.user.pfp || "N/A",
    bio: req.user.bio || "N/A",
    location: req.user.location || "N/A",
    website: req.user.website || "N/A",
    joined: req.user.createdAt,
  });
});

const sendNotification = asyncHandler(async (req, res) => {
  const { tuwueetId, type } = req.body;

  const tuwueet = await Tuwueet.findById(tuwueetId);
  const user = await User.findById(tuwueet.userId);

  if (!tuwueet) throw new Error("No such tuwueet");

  const notifications = user.notifications;
  notifications.push({
    tuwueetId,
    sentByUsername: req.user.username,
    type,
  });
  user.notifications = notifications;

  await user.save();

  res.json({ notifications, sentToUserId: tuwueet.userId });
});

const editProfile = asyncHandler(async (req, res) => {
  const { bio, location, website } = req.body;

  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    {
      bio,
      location,
      website,
    },
    { new: true }
  );

  res.json({
    bio: user.bio,
    location: user.location,
    website: user.website,
    joined: user.createdAt,
  });
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPasswords(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      bio: null,
      location: null,
      website: null,
      createdAt: user.createdAt,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

const registerUser = asyncHandler(async (req, res) => {
  const { email, password, confirmPassword, username, pfp } = req.body;

  console.log(req.body);

  if (!email || !password || !confirmPassword || !username) {
    console.log("test");

    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  if (password.length < 5) {
    res.status(400);
    throw new Error("Password must be at least 5 characters in length");
  }

  if (password !== confirmPassword) {
    res.status(400);
    throw new Error("Passwords don't match");
  }

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(400);
    throw new Error("Account with this email already exists");
  }

  const user = await User.create({
    email,
    password,
    username,
    pfp,
    notifications: [],
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      bio: null,
      location: null,
      website: null,
      createdAt: user.createdAt,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  editProfile,
  sendNotification,
  profileInfo,
  allNotifications,
};
