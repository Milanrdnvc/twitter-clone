import express from "express";
import mongoose from "mongoose";
import tuwueet from "./routes/tuwueet.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.use("/api/tuwueet", tuwueet);
// app.use("/api/user", user);

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
