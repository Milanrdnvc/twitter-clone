const router = require('express').Router();
const auth = require('../middleware/auth');
const Tuwueet = require('../models/tuwueet');

router.post('/create', auth, async (req, res) => {
  try {
    const { text, img } = req.body;
    if (!text)
      return res
        .status(400)
        .json({ msg: 'Your tuwueet must contain some text' });
    const newTuwueet = new Tuwueet({
      text,
      img,
      userId: req.user,
    });
    await newTuwueet.save();
    res.status(204).send(null);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/all', auth, async (req, res) => {
  const tuwueets = await Tuwueet.find({ userId: req.user });
  res.json({ tuwueets });
});

module.exports = router;
