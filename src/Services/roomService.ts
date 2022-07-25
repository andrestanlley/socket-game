import { Socket as SC } from 'socket.io';
import Room from '../Models/Rooms';

let id: string;
let room: Room;
let privateRooms: any;

function newRoom() {
  room = new Room();
  room.getInfo();
  return room;
}

function newPrivateRoom(roomId: string) {
  console.log(roomId);
  // if (privateRooms[roomId]) return privateRooms[roomId];
  privateRooms[roomId] = newRoom();
  return privateRooms[roomId];
}

newRoom();

const getRoomId = (privateRoom?: string) => {
  if (privateRoom) return newPrivateRoom(privateRoom);
  console.log(privateRooms);
  if (room.players.length <= 5) return room;
  newRoom();
  return room;
};

export { getRoomId };
