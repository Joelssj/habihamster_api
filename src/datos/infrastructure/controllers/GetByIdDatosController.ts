import { Request, Response } from "express";
import { GetByIdDatosUseCase } from "../../application/GetByIdDatosUseCase";

export class GetByIdDatosController {
  constructor(readonly getByIdDatosUseCase: GetByIdDatosUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const datos = await this.getByIdDatosUseCase.run(id);

      if (datos)
        // Code HTTP: 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            id: datos.id,
            claveCliente: datos.claveCliente,
            nombreContacto: datos.nombreContacto,
            correo: datos.correo, 
            telefono: datos.telefono,
          },
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrió algún problema",
        });
    } catch (error) {
      // Code HTTP: 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}



