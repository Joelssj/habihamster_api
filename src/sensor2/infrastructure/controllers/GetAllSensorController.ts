/*import { Request, Response } from "express";
import { GetAllSensorUseCase } from "../../application/GetAllSensorUseCase";

export class GetAllSensorController {
  constructor(readonly getAllSensorUseCase: GetAllSensorUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const sensores = await this.getAllSensorUseCase.run();
      console.log(sensores);
      if (sensores)
        res.status(200).send({
          status: "success",
          data: sensores.map((sensor2: any) => {
            return {
              id: sensor2.id,
              temperatura: sensor2.temperatura,
              humedad: sensor2.humedad,
              luz: sensor2.luz,
              comida: sensor2.comida,
              // Otros atributos si los tienes
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrió algún problema",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}*/

/*
import { Request, Response } from "express";

import { GetAllSensorUseCase } from "../../application/GetAllSensorUseCase";

export class GetAllSensorController {
  constructor(readonly getAllSensorUseCase: GetAllSensorUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const sensores = await this.getAllSensorUseCase.run();
      console.log(sensores);
      if (sensores)
        // Code HTTP: 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: sensores.map((sensor2: any) => {
            return {
              id: sensor2.id,
              temperatura: sensor2.temperatura, // Modifica el nombre del atributo a temperatura
              humedad: sensor2.humedad, // Incluye la humedad
              luz: sensor2.luz, // Incluye la luz
              comida: sensor2.comida, // Incluye la comida 
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
}*/

import { Request, Response } from "express";
import { GetAllSensorUseCase } from "../../application/GetAllSensorUseCase";

export class GetAllSensorController {
  constructor(readonly getAllSensorUseCase: GetAllSensorUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const sensores = await this.getAllSensorUseCase.run();
      console.log(sensores);
      if (sensores)
        // Code HTTP: 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: sensores.map((sensor2: any) => {
            return {
              id: sensor2.id,
              temperatura: sensor2.temperatura, // Modifica el nombre del atributo a temperatura
              humedad: sensor2.humedad, // Incluye la humedad
              luz: sensor2.luz, // Incluye la luz
              comida: sensor2.comida, // Incluye la comida
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