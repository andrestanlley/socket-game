import { Socket as SC } from "socket.io";

export default class Room {
  public uuid: string;
  public players: string[];

  enterRoom(socket: SC) {
    socket.join(this.uuid);
    this.players.push(socket.id);
  }
}

