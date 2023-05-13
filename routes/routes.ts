import { Router } from "express";
const router = Router();

import { createUserController } from "../factorys/dependencies";
import { creatPostController } from "../factorys/dependencies";
import { findAllUsersController } from "../factorys/dependencies";

router.post("/user", createUserController.createUser);
router.post("/post", creatPostController.createpost);
router.get("/users", findAllUsersController.findUsers);

export {router};






