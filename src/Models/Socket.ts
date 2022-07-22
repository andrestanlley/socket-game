import { Server } from "socket.io";
import { httpServer } from "../Setup/http"

class Socket {
  public io!: Server;

  public start() {
    this.io = new Server(httpServer, {
      cors: {
        origin: "*",
      },
    });
  }
}

export default new Socket();
