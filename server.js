import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database (MongoDB Atlas)
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
