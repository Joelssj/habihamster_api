import { MysqlUsersRepository } from "./MysqlUsersRepository";
import { CreateUsersUseCase } from "../application/CreateUsersUseCase";
import { GetByIdUsersUseCase } from "../application/GetByIdUsersUseCase";
import { GetAllUsersUseCase } from "../application/GetAllUsersUseCase";
import { LoginUseCase } from "../application/LoginUseCase";
import { CreateUsersController } from "./controllers/CreateUsersController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { GetByIdUsersController } from "./controllers/GetByIdUsersController";
import { LoginController } from "./controllers/LoginController";

export const mysqlReactionsRepository = new MysqlUsersRepository();
export const createUserUseCase = new CreateUsersUseCase(
  mysqlReactionsRepository
);
export const getAllUseCase = new GetAllUsersUseCase(
  mysqlReactionsRepository
);
export const getByIdUserUseCase = new GetByIdUsersUseCase(
  mysqlReactionsRepository
);
export const loginUseCase = new LoginUseCase(
  mysqlReactionsRepository
)
export const createUserController = new CreateUsersController(
  createUserUseCase
);
export const getAllController = new GetAllUsersController(
  getAllUseCase
);
export const getByIdUserController = new GetByIdUsersController(
  getByIdUserUseCase
);
export const loginController = new LoginController(
  loginUseCase
)

