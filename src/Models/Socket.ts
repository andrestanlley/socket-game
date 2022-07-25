import { Server } from 'socket.io';
import { httpServer } from '../Setup/http';
import url from 'url';
import base64id from 'base64id';
import { Request } from 'express';

class Socket {
  public io!: Server;

  public start() {
    this.io = new Server(httpServer, {
      cors: {
        origin: '*',
      },
    });
  }
}

export default new Socket();
