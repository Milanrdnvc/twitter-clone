import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

export const connectSocket = (socket) => {
  socket.on("connect", () => {
    console.log("Socket connected to server.");
  });
};

export const emitTuwueet = (socket, data) => {
  socket.emit("tuwueet", data);
};

export const emitComment = (socket, data) => {
  socket.emit("comment", data);
};

export const emitLike = (socket, data) => {
  socket.emit("like", data);
};

export default socket;
