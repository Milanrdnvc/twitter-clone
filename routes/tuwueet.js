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
    const updatedTuwueet = await Tuwueet.findOneAndUpdate(
      { _id: tuwueetId },
      { likes }
    );
    res.json({ updatedTuwueet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/all', auth, async (req, res) => {
  const tuwueets = await Tuwueet.find();
  res.json({ tuwueets });
});

module.exports = router;
