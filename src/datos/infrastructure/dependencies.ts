import { CreateDatosUseCase } from "../application/CreateDatosUseCase";
import { GetAllDatosUseCase } from "../application/GetAllDatosUseCase";
import { GetByIdDatosUseCase } from "../application/GetByIdDatosUseCase";
import { CreateDatosController } from "./controllers/CreateDatosController";
import { GetAllDatosController } from "./controllers/GetAllDatosController";
import { GetByIdDatosController } from "./controllers/GetByIdDatosController";
import { MysqlDatosRepository } from "./MysqlDatosRepository";

export const mysqlDatosRepository = new MysqlDatosRepository();
export const createDatosUseCase = new CreateDatosUseCase(
  mysqlDatosRepository
);
export const getAllUseCase = new GetAllDatosUseCase(mysqlDatosRepository);
export const getByIdDatosUseCase = new GetByIdDatosUseCase(
  mysqlDatosRepository
);
export const createDatosController = new CreateDatosController(
  createDatosUseCase
);
export const getAllDatosController = new GetAllDatosController(
  getAllUseCase
);
export const getByIdDatosController = new GetByIdDatosController(
  getByIdDatosUseCase
);
