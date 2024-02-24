import express from "express";

import { createDatosController, getAllDatosController, getByIdDatosController } from "./dependencies";

export const datosRouter = express.Router();

datosRouter.get(
  "/",
  getAllDatosController.run.bind(getAllDatosController)
);
datosRouter.get(
  "/:id",
  getByIdDatosController.run.bind(getByIdDatosController)
);
datosRouter.post(
  "/",
  createDatosController.run.bind(createDatosController)
);
