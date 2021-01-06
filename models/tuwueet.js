const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Tweet = mongoose.model('tuwueet', tweetSchema);
