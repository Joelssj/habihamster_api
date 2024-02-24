import { Request, Response } from "express";
import { GetAllDatosUseCase } from "../../application/GetAllDatosUseCase";


export class GetAllDatosController {
  constructor(readonly getAllDatosUseCase: GetAllDatosUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const dato = await this.getAllDatosUseCase.run();
      console.log(dato);
      if (dato)
        // Code HTTP: 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: dato.map((dato2: any) => {
            return {
              id: dato2.id,
              claveCliente: dato2.claveCliente, 
              nombreContacto: dato2.nombreContacto,
              correo: dato2.correo, 
              telefono: dato2.telefono,
            };
          }),
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




