import Socket from "../Models/Socket";

class SocketListener {
  public start() {
    Socket.io.on("connection", (socket) => {
      console.log(socket.id);
    });
  }
}

export default new SocketListener();
