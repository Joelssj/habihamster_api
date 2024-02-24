import { Signale } from "signale";
import express from "express";
import { usersRouter } from "./Users/infrastructure/UsersRouter";
import cors from 'cors';
import { datosRouter } from "./datos/infrastructure/DatosRouter";

const app = express();
const signale = new Signale();
app.use(express.json());
app.use(cors());
app.use("/user", usersRouter);
app.use("/datos", datosRouter);

const port = 3010;
const host = '0.0.0.0';

app.listen(port, host, () => {
  signale.success("Server online in port 3010");
});
