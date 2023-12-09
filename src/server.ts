import express from "express";
import http from "http";
import { Server } from "socket.io";

import { sensorRouter } from "./sensor/infrastructure/SensorRouter";
import { handleWebSockets } from "./websocket/Websocketrouter";

class App {
  private app: express.Application = express();
  private server: http.Server = http.createServer(this.app);
  private io: Server | null = null;

  constructor() {
    this.configure();
  }

  async configure() {
    this.app.use(express.json());
    this.app.use("/sensores", sensorRouter);
  }

  socketServer() {
    this.io = new Server(this.server, {
      cors: { origin: "*" }, // Permitir conexiones desde cualquier origen en el socket.io
    });

    // Utiliza la función handleWebSockets para manejar los eventos de los WebSockets.
    handleWebSockets(this.io);
  }

  start() {
    this.server.listen(3010, () => {
      console.log(`Server online in port 3010`);
    });
  }
}

const app: App = new App();
app.socketServer();
app.start();
