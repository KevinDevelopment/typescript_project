import { Request, Response } from "express";
import { validateEmail } from "../utils/validate-email";
import { findUserInDatabase, createUserService } from "../factorys/dependencies";


export class CreateUserController {
    async createUser(request: Request, response: Response) {
        const { email, name } = request.body;

        const validateEmailOfUser = validateEmail(email);

        if (!validateEmailOfUser) {
            return response.status(406).json({
                status: false,
                message: "please enter a valid email"
            });
        }

        if (!name || typeof name != 'string') {
            return response.status(406).json({
                status: false,
                message: "the name is invalid"
            });
        }

        const findUser = await findUserInDatabase.findUserById(email);
        console.log(findUser);

        if (findUser) {
            return response.status(406).json({
                status: false,
                message: "user already exists"
            });
        }

        const insertUserInDatabase = await createUserService.createUser(email, name);

        return response.status(200).json({
            status: true,
            message: "successfully registered user"
        });

    }
}