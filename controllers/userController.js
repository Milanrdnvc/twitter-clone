import User from "../models/user.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPasswords(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
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
    generateToken(res, user._id);
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

export { authUser, registerUser, logoutUser };
