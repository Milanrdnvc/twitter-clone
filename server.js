require('dotenv').config();
const express = require('express');
const socket = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const auth = require('./middleware/auth');
const { cloudinary } = require('./utils/cloudinary');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use('/users', require('./routes/user'));
app.use('/tuwueets', require('./routes/tuwueet'));

app.post('/uploadImage', auth, async (req, res) => {
  try {
    const fileStr = req.body.data;
    if (!fileStr) return res.status(400).json({ msg: 'No image provided' });
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'tuwuitter',
    });
    res.status(200).json({ url: uploadedResponse.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  err => {
    if (err) throw err;
    console.log('Connected to MongoDB');
    const server = app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
    const io = socket(server);
    io.on('connection', socket => {
      socket.on('tuwueet', ({ tuwueet }) => {
        io.emit('tuwueet', tuwueet);
      });
    });
  }
);
