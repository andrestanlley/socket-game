import Socket from "../Models/Socket";
import { getRoomId } from "./roomService";

const room = getRoomId();

class SocketListener {
  public start() {
    Socket.io.on("connection", (socket) => {
      room.enterRoom(socket);

      socket.on("disconnect", () => {
        if(!socket.connected){
          room.quitRoom(socket)
        }
      });
    });
  }
}

export default new SocketListener();
