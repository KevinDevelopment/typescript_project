import { Router } from "express";
const router = Router();

import { createUserController } from "../factorys/dependencies";
import { creatPostController } from "../factorys/dependencies";

router.post("/user", createUserController.createUser);
router.post("/post", creatPostController.createpost);

export {router};






