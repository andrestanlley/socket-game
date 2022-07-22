import { Socket as SC } from "socket.io";
import { Guid } from "../Models/Guid";
import Room from "../Models/Rooms";

let id: string;
let room: Room;

function newRoom() {
  id = Guid.newGuid();
  room = new Room();
  room.uuid = id;
}
newRoom();

const getRoomId = (socket: SC) => {
  if (room.players.length <= 5) return room.uuid;
  newRoom();
  return room.uuid;
};

export { getRoomId };
