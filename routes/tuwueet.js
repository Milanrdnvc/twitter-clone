const router = require('express').Router();
const auth = require('../middleware/auth');
const Tuwueet = require('../models/tuwueet');

router.post('/create', auth, async (req, res) => {
  try {
    const { text, img, username } = req.body;
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
    });
    await newTuwueet.save();
    res.status(204).send(null);
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
    const likes = (await Tuwueet.findOne({ _id: tuwueetId })).likes;
    likes.push({ userId });
    await Tuwueet.findOneAndUpdate({ _id: tuwueetId }, { likes });
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
    const likes = (await Tuwueet.findOne({ _id: tuwueetId })).likes;
    const filteredLikes = likes.filter(user => user.userId !== userId);
    await Tuwueet.findOneAndUpdate(
      { _id: tuwueetId },
      { likes: filteredLikes }
    );
    res.json({ filteredLikes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/comment', auth, async (req, res) => {
  try {
    const {
      tuwueetId,
      commentText,
      commentImg,
      username,
      createdAt,
      userImg,
    } = req.body;
    if (!tuwueetId) res.status(400).json({ msg: 'Tuwueet ID not provided' });
    if (!commentText)
      res.status(400).json({ msg: 'Your comment must include some text' });
    const tuwueet = await Tuwueet.findOne({ _id: tuwueetId });
    const newComment = {
      tuwueetId,
      userImg,
      commentText,
      createdAt,
      img: commentImg || 'no img',
      createdBy: username,
    };
    const comments = tuwueet.comments;
    comments.push(newComment);
    await Tuwueet.findOneAndUpdate(
      { _id: tuwueetId },
      {
        comments,
      }
    );
    res.json({ comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', auth, async (req, res) => {
  const tuwueet = await Tuwueet.findOne({ _id: req.body.id });
  res.json({ tuwueet });
});

router.get('/all', auth, async (_, res) => {
  const tuwueets = await Tuwueet.find();
  res.json({ tuwueets });
});

module.exports = router;
