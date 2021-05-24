const router = require('express').Router();
const auth = require('../middleware/auth');
const Tuwueet = require('../models/tuwueet');

router.post('/create', auth, async (req, res) => {
  try {
    const { text, img, username, pfp } = req.body;
    if (!text)
      return res
        .status(400)
        .json({ msg: 'Your tuwueet must contain some text' });
    const newTuwueet = new Tuwueet({
      text,
      img: img || 'no img',
      userId: req.user,
      username: username,
      likes: [],
      comments: [],
      pfp,
    });
    await newTuwueet.save();
    res.json({ newTuwueet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/like', auth, async (req, res) => {
  try {
    const { userId, tuwueetId } = req.body;
    if (!userId) return res.status(400).json({ msg: 'User ID not provided' });
    if (!tuwueetId)
      return res.status(400).json({ msg: 'Tuwueet ID not provided' });
    const tuwueet = await Tuwueet.findOne({ _id: tuwueetId });
    const likes = tuwueet.likes;
    likes.push({ userId });
    tuwueet.likes = likes;
    await tuwueet.save();
    res.json({ likes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/unlike', auth, async (req, res) => {
  try {
    const { tuwueetId, userId } = req.body;
    if (!userId) return res.status(400).json({ msg: 'User ID not provided' });
    if (!tuwueetId)
      return res.status(400).json({ msg: 'Tuwueet ID not provided' });
    const tuwueet = await Tuwueet.findOne({ _id: tuwueetId });
    const likes = tuwueet.likes;
    const filteredLikes = likes.filter(user => user.userId !== userId);
    tuwueet.likes = filteredLikes;
    await tuwueet.save();
    res.json({ filteredLikes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/comment', auth, async (req, res) => {
  try {
    const { tuwueetId, text, img, username, createdAt, userImg } = req.body;
    if (!tuwueetId) res.status(400).json({ msg: 'Tuwueet ID not provided' });
    if (!text)
      return res
        .status(400)
        .json({ msg: 'Your comment must include some text' });
    const tuwueet = await Tuwueet.findOne({ _id: tuwueetId });
    const newComment = {
      tuwueetId,
      userImg,
      text,
      createdAt,
      img: img || 'no img',
      createdBy: username,
    };
    const comments = tuwueet.comments;
    comments.push(newComment);
    tuwueet.comments = comments;
    await tuwueet.save();
    res.json({ comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const tuwueet = await Tuwueet.findOne({ _id: req.body.id });
    res.json({ tuwueet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/allComments', auth, async (req, res) => {
  try {
    const { tuwueetId } = req.body;
    if (!tuwueetId)
      return res.status(400).json({ msg: 'Tuwueet ID not provided' });
    const tuwueets = await Tuwueet.findOne({ _id: tuwueetId });
    const comments = tuwueets.comments;
    res.json({ comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/all', async (_, res) => {
  try {
    const tuwueets = await Tuwueet.find();
    res.json({ tuwueets });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
