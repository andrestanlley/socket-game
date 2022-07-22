import { Socket as SC } from "socket.io";
import Socket from "./Socket";

export default class Room {
  public uuid!: string;
  public players!: string[];

  enterRoom(socket: SC) {
    socket.join(this.uuid);
    this.players.push(socket.id);
    this.sendQuestion();
  }

  sendQuestion() {
    Socket.io.in(this.uuid).emit("question", "nova pergunta");
  }

  quitRoom(socket: SC) {
    let socketIndex = this.players.findIndex((sc) => sc === socket.id);
    if (socketIndex > -1) {
      socket.leave(this.uuid);
      this.players.splice(socketIndex);
    }
  }
}
