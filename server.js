import express from "express";
import mongoose from "mongoose";
import tuwueets from "./routes/tuwueets.js";
import users from "./routes/users.js";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Initialize server with socket.io
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});
const PORT = process.env.PORT || 5000;

// Listen for incoming socket.io connections
io.on("connection", (socket) => {
  socket.on("tuwueet", (data) => {
    io.emit("tuwueet", data);
  });

  socket.on("comment", (data) => {
    io.emit("comment", data);
  });

  socket.on("like", (data) => {
    io.emit("like", data);
  });
});

// Middleware for parsing incoming data
app.use(express.json({ limit: "50mb" }));
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
    httpServer.listen(process.env.PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
