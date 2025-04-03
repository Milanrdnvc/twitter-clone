// const Tuwueet = require("../models/tuwueet");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const auth = require("../middleware/auth");
import User from "../models/user.js";
import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  res.json({ message: "auth user" });
});

const registerUser = asyncHandler(async (req, res) => {
  const { email, password, passwordCheck, username, pfp } = req.body;

  if (!email || !password || !passwordCheck || !username) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  if (password.length < 5) {
    res.status(400);
    throw new Error("Password must be at least 5 characters in length");
  }

  if (password !== passwordCheck) {
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
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { authUser, registerUser };
