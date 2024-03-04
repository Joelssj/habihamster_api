import { Sensor } from "../domain/Sensor";
import { SensorRepository } from "../domain/SensorRepository";

export class CreateSensorUseCase {
  constructor(readonly sensorRepository: SensorRepository) {}

  async run(
    temperatura: number,
    humedad: number,
    luz: number,
    comida: number
  ): Promise<Sensor | null> {
    try {
      // Aquí iría la lógica de tu caso de uso sin referencias a la base de datos
      // ...

      // Ejemplo de creación de un objeto Sensor (puedes adaptarlo según tus necesidades)
      const sensor: Sensor = {
        id: 1, // Id simulado
        temperatura,
        humedad,
        luz,
        comida,
        // Otros atributos si los tienes
      };

      return sensor;
    } catch (error) {
      return null;
    }
  }
}
