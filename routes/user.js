const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  try {
    const { email, password, passwordCheck, username } = req.body;
    if (!email || !password || !passwordCheck || !username)
      return res.status(400).json({ msg: 'Please fill in all the fields' });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: 'The password needs to be at least 5 characters long' });
    if (password !== passwordCheck)
      return res.status(400).json({ msg: "Passwords don't match" });
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: 'Account with this email already exists' });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      email: email,
      password: passwordHash,
      username: username,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ msg: 'Please fill in all the fields' });
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "Account with this email doesn't exist" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid password' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
