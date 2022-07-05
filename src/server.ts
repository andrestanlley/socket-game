import express from "express";
const app = express();

import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
import { getRoomId, enterRoom } from "./Services/roomService";
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  const roomId = getRoomId().toString();
  enterRoom(socket, roomId);
});

server.listen(3000, () => {
  console.log("listening on 3000");
});
