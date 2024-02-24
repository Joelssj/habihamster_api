import express from "express";
import { createUserController } from "./dependencies";
import { loginController } from "./dependencies";

export const usersRouter = express.Router();

usersRouter.post(
  "/crear",
  createUserController.run.bind(createUserController)
);
usersRouter.post(
  "/login",
  loginController.run.bind(loginController)
);