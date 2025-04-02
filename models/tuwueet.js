import mongoose from "mongoose";

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
    pfp: {
      type: String,
    },
    likes: {
      type: Array,
      required: true,
    },
    comments: {
      type: Array,
      reqired: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tuwueet = mongoose.model("tuwueet", tuwueetSchema);
export default Tuwueet;
