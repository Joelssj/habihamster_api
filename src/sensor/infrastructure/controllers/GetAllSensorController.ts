import { Request, Response } from "express";
import { GetAllSensorUseCase } from "../../application/GetAllSensorUseCase";

export class GetAllSensorController {
  constructor(readonly getAllSensorUseCase: GetAllSensorUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const sensores = await this.getAllSensorUseCase.run();
      console.log(sensores);

      if (sensores) {
        const totalSensores = sensores.length;

      
        let sumaTemperatura = 0;
        let sumaHumedad = 0;
        let sumaLuz = 0;
        let contadorTemperaturaMayor24 = 0;
        let contadorHumedadMayor60 = 0;
        let contadorLuzMayor20 = 0;

        sensores.forEach((sensor: any) => {
          //! para que no truene 
          const temperatura = parseFloat(sensor.temperatura);
          const humedad = parseFloat(sensor.humedad);

          //!Map de mayores OwO
          if (!isNaN(temperatura)) {
            sumaTemperatura += temperatura;
        
            if (temperatura > 24) {
              contadorTemperaturaMayor24++;
            }
          }

          if (!isNaN(humedad)) {
            sumaHumedad += humedad;
       
            if (humedad > 60) {
              contadorHumedadMayor60++;
            }
          }

   
          sumaLuz += sensor.luz;

          if (sensor.luz > 27) {
            contadorLuzMayor20++;
          }
        });

        //!Media y porcentaje
        const mediaTemperatura = totalSensores > 0 ? sumaTemperatura / totalSensores : null;
        const mediaHumedad = totalSensores > 0 ? sumaHumedad / totalSensores : null;
        const mediaLuz = totalSensores > 0 ? sumaLuz / totalSensores : 0;


        const porcentajeTemperaturaMayor24 = (contadorTemperaturaMayor24 / totalSensores) * 100;
        const porcentajeHumedadMayor60 = (contadorHumedadMayor60 / totalSensores) * 100;
        const porcentajeLuzMayor20 = (contadorLuzMayor20 / totalSensores) * 100;

        
        res.status(200).send({
          status: "success",
          data: sensores.map((sensor: any) => {
            return {
              id: sensor.id,
              temperatura: sensor.temperatura,
              humedad: sensor.humedad,
              luz: sensor.luz,
              comida: sensor.comida,
              fecha: sensor.fecha,
              hora: sensor.hora,
            };
          }),
          mediaTemperatura,
          mediaHumedad,
          mediaLuz,
          temperaturaMayor24: porcentajeTemperaturaMayor24,
          humedadMayor60: porcentajeHumedadMayor60,
          luzMayor20: porcentajeLuzMayor20,
        });
      } else {
        res.status(400).send({
          status: "error",
          msn: "Ocurrió algún problema",
        });
      }
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}





