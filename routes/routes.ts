import { Router } from "express";
const router = Router();

import { CreateUserController } from "../controllers/create-user-controller";

const createUserController = new CreateUserController();

router.post("/user", createUserController.createUser);

export {router};






