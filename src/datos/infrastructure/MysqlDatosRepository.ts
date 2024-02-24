// MysqlSensorRepository.ts

import { query } from "../../database/mysql";
import { Datos } from "../domain/Datos";
import { DatosRepository } from "../domain/DatosRepository";

export class MysqlDatosRepository implements DatosRepository {
  async getAll(): Promise<Datos[] | null> {
    const sql = "SELECT * FROM datos"; 
    try {
      const [data]: any = await query(sql, []);
      const dataDatos = Object.values(JSON.parse(JSON.stringify(data)));

      return dataDatos.map(
        (datos: any) =>
          new Datos(
            datos.id,
            datos.claveCliente,
            datos.nombreContacto,
            datos.correo,
            datos.telefono
          )
      );
    } catch (error) {
      console.error("Error al obtener datos del sensor desde MySQL:", error);
      return null;
    }
  }

  async getById(userId: number): Promise<Datos | null> {
    const sql = "SELECT * FROM datos WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      return new Datos(
        result[0].id,
        result[0].claveCliente,
        result[0].nombreContacto,
        result[0].correo,
        result[0].telefono
      );
    } catch (error) {
      return null;
    }
  }

  async createDatos(
    claveCliente: number,
    nombreContacto: string,
    correo: string,
    telefono: number

  ): Promise<Datos | null> {
    const sql =
      "INSERT INTO datos (claveCliente, nombreContacto, correo, telefono) VALUES (?, ?, ?, ?)";
    const params: any[] = [claveCliente, nombreContacto, correo, telefono];
    try {
      const [result]: any = await query(sql, params);
      return new Datos(
        result.insertId,
        claveCliente,
        nombreContacto,
        correo,
        telefono

      );
    } catch (error) {
      return null;
    }
  }
}





