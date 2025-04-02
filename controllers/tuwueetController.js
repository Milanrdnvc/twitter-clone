import Tuwueet from "../models/tuwueet.js";

export async function createTuwueet(req, res, next) {
  try {
    const { text, img, username, pfp, id } = req.body;

    if (!text || !username || !id)
      return res
        .status(400)
        .json({ msg: "Text and username are required (and id for now)" });

    const newTuwueet = new Tuwueet({
      text,
      img: img || "no img",
      userId: id,
      username: username,
      likes: [],
      comments: [],
      pfp: pfp || "no pfp",
    });

    await newTuwueet.save();

    res.json({ newTuwueet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
