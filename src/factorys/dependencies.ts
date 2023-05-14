import { CreateUserController } from "../controllers/create-user-controller";
import { CreatePostController } from "../controllers/create-post-controller";
import { FindAllUsersController } from "../controllers/find-all-users-controller";
import { FindUserInDatabase } from "../services/finduser-in-database";
import { CreateUserService } from "../services/create-user-service";
import { CreatePostService } from "../services/create-post-srevice";

import { PrismaClient } from "@prisma/client";

const createUserController = new CreateUserController();
const creatPostController = new CreatePostController();
const findAllUsersController = new FindAllUsersController();
const findUserInDatabase = new FindUserInDatabase();
const createUserService = new CreateUserService();
const createPostService = new CreatePostService();

const prisma = new PrismaClient();

export {
    createUserService,
    findUserInDatabase,
    createUserController,
    createPostService,
    creatPostController,
    findAllUsersController,
    prisma
};