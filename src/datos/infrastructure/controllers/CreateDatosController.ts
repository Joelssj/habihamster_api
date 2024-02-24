import { Request, Response } from "express";

import { CreateDatosUseCase } from "../../application/CreateDatosUseCase";

export class CreateDatosController {
  constructor(readonly createDatosUseCase: CreateDatosUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log("mensaje " + JSON.stringify(data));
   try {
      const datos = await this.createDatosUseCase.run(
        data.claveCliente, 
        data.nombre, 
        data.correo, 
        data.telefono
      );

      if (datos)
        // Code HTTP: 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: datos?.id,
            temperatura: datos?.claveCliente,
            humedad: datos?.nombreContacto, 
            luz: datos?.correo,
            comida: datos?.telefono
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
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



