const router = require('express').Router();
const User = require('../models/user');
const Tuwueet = require('../models/tuwueet');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.post('/register', async (req, res) => {
  try {
    const { email, password, passwordCheck, username, pfp } = req.body;
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
      pfp: pfp,
      notifications: [],
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
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/tokenIsValid', async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.json(false);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/editProfile', auth, async (req, res) => {
  try {
    const { pfp, bio, location, website } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: req.user },
      {
        pfp,
        bio,
        location,
        website,
      },
      { new: true }
    );
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/sendNotification', auth, async (req, res) => {
  try {
    const newNotification = req.body;
    const tuwueet = await Tuwueet.findById(newNotification.tuwueetId);
    const user = await User.findById(tuwueet.userId);
    const notifications = user.notifications;
    notifications.push(newNotification);
    user.notifications = notifications;
    await user.save();
    res.json({ notifications, userId: tuwueet.userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/profileInfo', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json({
      pfp: user.pfp,
      bio: user.bio,
      location: user.location,
      website: user.website,
      joined: user.createdAt,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/profileInfo/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({
      bio: user.bio,
      location: user.location,
      website: user.website,
      joined: user.createdAt,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/allNotifications', auth, async (req, res) => {
  try {
    const notifications = (await User.findById(req.user)).notifications;
    res.json({ notifications });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json({
      username: user.username,
      id: user._id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
