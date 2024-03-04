import { Request, Response } from "express";

import { CreateSensorUseCase } from "../../application/CreateSensorUseCase";

export class CreateSensorController {
  constructor(readonly createSensorUseCase: CreateSensorUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    console.log("mensaje " + JSON.stringify(data));
    try {
      // Modifica la llamada al caso de uso para reflejar los cambios en los atributos
      const sensor = await this.createSensorUseCase.run(
        data.temperatura,
        data.humedad,
        data.luz,
        data.comida
      );

      if (sensor)
        res.status(201).send({
          status: "success",
          data: {
            id: sensor?.id,
            temperatura: sensor?.temperatura,
            humedad: sensor?.humedad,
            luz: sensor?.luz,
            comida: sensor?.comida,
            // Otros atributos si los tienes
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}



/*import { Request, Response } from "express";

import { CreateSensorUseCase } from "../../application/CreateSensorUseCase";

export class CreateSensorController {
  constructor(readonly createSensorUseCase: CreateSensorUseCase) {}

  async run(req: Request, res: Response) {
    const data2 = req.body;
    console.log("mensaje " + JSON.stringify(data2));
    try {
      const sensor2 = await this.createSensorUseCase.run(
        data2.temperatura, // Modifica el nombre del atributo a temperatura
        data2.humedad, // Agrega la humedad
        data2.luz, // Agrega la luz
        data2.comida // Cambia a rellenado y ajusta el tipo a number
      );

      if (sensor2)
        // Code HTTP: 201 -> Creado
        res.status(201).send({
          status: "success",
          data2: {
            id: sensor2?.id,
            temperatura: sensor2?.temperatura,
            humedad: sensor2?.humedad, // Incluye la humedad
            luz: sensor2?.luz, // Incluye la luz
            comida: sensor2?.comida, // Cambia a rellenado
          },
        });
      else
        res.status(204).send({
          status: "error",
          data2: "NO fue posible agregar el registro",
        });
    } catch (error) {
      // Code HTTP: 204 Sin contenido
      res.status(204).send({
        status: "error",
        data2: "Ocurrió un error",
        msn: error,
      });
    }
  }
}*/