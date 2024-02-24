import { Datos } from "./Datos";

export interface DatosRepository {
  getAll(): Promise<Datos[] | null>;
  getById(userId: number): Promise<Datos | null>;
  createDatos(
    claveCliente: number,
    nombreContacto: string,
    correo: string,
    telefono: number
  ): Promise<Datos | null>;
}

