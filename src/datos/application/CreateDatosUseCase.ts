import { Datos } from "../domain/Datos";
import { DatosRepository } from "../domain/DatosRepository";

export class CreateDatosUseCase {
  constructor(readonly datosRepository: DatosRepository) {}

async run(
  claveCliente: number,
  nombreContacto: string,
  correo: string,
  telefono: number
): Promise<Datos | null> {
  try {
    const datos = await this.datosRepository.createDatos(
      claveCliente,
      nombreContacto,
      correo,
      telefono
    );
    return datos;
  } catch (error) {
    return null;
  }
}
}
  
