import express from "express";
import { createSensorController, getAllSensorController, getByIdSensorController } from "../../sensor/infrastructure/dependencies";

export const sensor2Router = express.Router();

sensor2Router.get(
  "/",
  getAllSensorController.run.bind(getAllSensorController)
);
sensor2Router.get(
  "/:id",
  getByIdSensorController.run.bind(getByIdSensorController)
);
sensor2Router.post(
  "/",
  createSensorController.run.bind(createSensorController)
);
