import { Sensor } from "../domain/Sensor";
import { SensorRepository } from "../domain/SensorRepository";

export class CreateSensorUseCase {
  constructor(readonly sensorRepository: SensorRepository) {}

async run(
  temperatura: number,
  humedad: number,
  luz: number,
  comida: string,
  fecha: Date,
  hora: string
): Promise<Sensor | null> {
  try {
    const sensor = await this.sensorRepository.createSensor(
      temperatura,
      humedad,
      luz,
      comida,
      fecha,
      hora
    );
    return sensor;
  } catch (error) {
    return null;
  }
}
}
  
