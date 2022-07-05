import { Socket } from "socket.io";

class Room {
  constructor(public id: number, public players: string[]) {}
}
let id = 0;
let room = new Room(id, []);

const getRoomId = () => {
  if (room.players.length <= 5) {
    return room.id;
  }
  id++;
  room = new Room(id, []);
  return room.id;
};

const enterRoom = (socket: Socket, roomId: string) => {
  socket.join(roomId);
  room.players.push(socket.id);
};

export { getRoomId, enterRoom };
