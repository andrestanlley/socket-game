import Socket from "./Models/Socket";
import SocketListener from "./Services/SocketListener";
import { httpServer } from "./Setup/http"

Socket.start();
SocketListener.start();

httpServer.listen(3000, () => {
  console.log("Server rodando na porta 3000.");
});
