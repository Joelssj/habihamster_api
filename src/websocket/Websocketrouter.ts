import { Server, Socket } from "socket.io";

import { MysqlSensorRepository } from "../sensor/infrastructure/MysqlSensorRepository";

const connectedClients: Set<Socket> = new Set();
const sensorRepository = new MysqlSensorRepository();

export function handleWebSockets(io: Server) {
  io.on("connection", async (socket: Socket) => {
    console.log("Un usuario conectado!");

    connectedClients.add(socket);

    await emitLast12DataToClient(socket);

    socket.on("disconnect", () => {
      console.log("Un usuario se desconectó!");
      connectedClients.delete(socket);
    });
  });

  setInterval(async () => {
    await emitLast12DataToClients();
  }, 5000);
}

async function emitLast12DataToClients() {
  const last12SensorData = await sensorRepository.getAll();

  if (last12SensorData) {
    const jsonData = JSON.stringify(last12SensorData);
    for (const clientSocket of connectedClients) {
      clientSocket.emit("sen_data", jsonData);
    }
  }
}

async function emitLast12DataToClient(socket: Socket) {
  const last12SensorData = await sensorRepository.getAll();

  if (last12SensorData) {
    const jsonData = JSON.stringify(last12SensorData);
    socket.emit("sen_data", jsonData);
  }
}
