import { Datos } from "../domain/Datos";
import { DatosRepository } from "../domain/DatosRepository";

export class GetAllDatosUseCase {
  constructor(readonly datosRepository: DatosRepository) {}

  async run(): Promise<Datos[] | null> {
    try {
      const result = await this.datosRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
