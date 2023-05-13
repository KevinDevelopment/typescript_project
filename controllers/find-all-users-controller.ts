import { Request, Response } from "express";
import { findUserInDatabase } from "../factorys/dependencies";

export class FindAllUsersController {
    async findUsers(request: Request, response: Response) {

        const findUsers = await findUserInDatabase.findAllUsers();

        return response.status(200).json({
            status: true,
            findUsers
        })

    }
}