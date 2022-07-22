import { io } from "../server";
import { rooms } from "../Models/Rooms";

export function welcomeMessage(roomId: string) {
  io.to(roomId).emit(`Bem vindo ao quarto ${roomId}`);
}
