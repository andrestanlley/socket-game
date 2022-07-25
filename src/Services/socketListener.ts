import Room from '../Models/Rooms';
import Socket from '../Models/Socket';
import { getRoomId } from './roomService';

class SocketListener {
  public start() {
    let room: any;
    Socket.io.on('connection', (socket) => {
      socket.on('room', (roomId: string) => {
        if (roomId) {
          room = getRoomId(roomId);
          room.enterRoom(socket);
        }
        room = getRoomId();
        room!.enterRoom(socket);
      });

      socket.on('answer', (answer) => {
        room.receiveAnswer(socket, answer);
      });

      socket.on('disconnect', () => {
        if (!socket.connected) {
          console.log('disconnect')
          // room.quitRoom(socket);
        }
      });
    });
  }
}

export default new SocketListener();
