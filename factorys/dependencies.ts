import { CreateUserService } from "../services/create-user-service";
import { FindUserInDatabase } from "../services/finduser-in-database";

const createUserService = new CreateUserService();
const findUserInDatabase = new FindUserInDatabase();

export {
    createUserService,
    findUserInDatabase
};