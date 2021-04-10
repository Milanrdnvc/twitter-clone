const mongoose = require('mongoose');

const tuwueetSchema = new mongoose.Schema(
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
    username: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Tuwueet = mongoose.model('tuwueet', tuwueetSchema);
