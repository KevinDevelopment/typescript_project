import { Request, Response, json } from "express";
import { createPostService } from "../factorys/dependencies";

export class CreatePostController {
    async createpost(request: Request, response: Response) {
        const { title, content, published, userId } = request.body;

        if (typeof title != 'string' && typeof content != 'string') {
            return response.status(406).json({
                status: false,
                message: "invalid data"
            });
        }

        if (!userId) {
            return response.status(406).json({
                status: false,
                message: "enter the id"
            })
        }

        const createPostInDatabase = await createPostService.createPost(title, content, published, userId);

        return response.status(200).json({
            status: true,
            message: `post successfully created and associated with the user id ${userId}`
        })

    }
}