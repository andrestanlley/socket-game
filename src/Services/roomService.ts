import { Socket as SC } from "socket.io";
import { Guid } from "../Models/Guid";
import Room from "../Models/Rooms";

let id: string;
let room: Room;

function newRoom() {
  id = Guid.newGuid();
  room = new Room();
  room.uuid = id;
  room.players = []
}
newRoom();

const getRoomId = () => {
  if (room.players.length <= 5) return room;
  newRoom();
  return room;
};

export { getRoomId };
