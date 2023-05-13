import { CreateUserController } from "../controllers/create-user-controller";
import { FindUserInDatabase } from "../services/finduser-in-database";
import { CreateUserService } from "../services/create-user-service";
import { CreatePostService } from "../services/create-post-srevice";
import { CreatePostController } from "../controllers/create-post-controller";

const createUserController = new CreateUserController();
const findUserInDatabase = new FindUserInDatabase();
const createUserService = new CreateUserService();
const createPostService = new CreatePostService();
const creatPostController = new CreatePostController();

export {
    createUserService,
    findUserInDatabase,
    createUserController,
    createPostService,
    creatPostController
};