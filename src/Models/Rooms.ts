import { Socket as SC } from 'socket.io';
import { Guid } from './Guid';
import Socket from './Socket';

interface Players {
  socketId: string;
  points: number;
}

export default class Room {
  public uuid!: string;
  public players!: Players[];
  private questionOpen!: boolean;
  private correctAnswer!: number;
  private pointsQuestion!: number;

  getInfo() {
    this.uuid = Guid.newGuid();
    this.players = [];
  }

  enterRoom(socket: SC) {
    if (!this.players.find((player) => player.socketId === socket.id)) {
      socket.join(this.uuid);
      this.players.push({ socketId: socket.id, points: 0 });
      this.sendQuestion();
    }
  }

  sendQuestion() {
    Socket.io.in(this.uuid).emit('question', 'nova pergunta');
    this.pointsQuestion = 10;
    this.correctAnswer = 1;
    this.questionOpen = true;
    setTimeout(() => {
      this.questionOpen = false;
    }, 10000);
  }

  receiveAnswer(socket: SC, answer: number) {
    if (answer === this.correctAnswer && this.questionOpen) {
      this.players.find((sc) => sc.socketId === socket.id)!.points +=
        this.pointsQuestion;
      this.pointsQuestion -= 1;
    }
  }

  quitRoom(socket: SC) {
    let socketIndex = this.players!.findIndex(
      (sc) => sc.socketId === socket.id
    );
    if (socketIndex > -1) {
      socket.leave(this.uuid);
      this.players.splice(socketIndex);
    }
  }
}
