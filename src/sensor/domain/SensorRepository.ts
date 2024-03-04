import { Sensor } from "./Sensor";

export interface SensorRepository {
  getAll(): Promise<Sensor[] | null>;
  getById(userId: number): Promise<Sensor | null>;
  createSensor(
    temperatura: number,
    humedad: number,
    luz: number,
    comida: string,
    fecha: Date,
    hora: string
  ): Promise<Sensor | null>;
}

