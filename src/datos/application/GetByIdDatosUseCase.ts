import { Datos } from "../domain/Datos";
import { DatosRepository } from "../domain/DatosRepository";

export class GetByIdDatosUseCase {
  constructor(readonly datosRepository: DatosRepository) {}

  async run(id: number): Promise<Datos | null> {
    try {
      const result = await this.datosRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
