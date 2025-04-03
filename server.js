import express from "express";
import mongoose from "mongoose";
import tuwueets from "./routes/tuwueets.js";
import users from "./routes/users.js";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API routes
app.use("/api/tuwueets", tuwueets);
app.use("/api/users", users);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

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
