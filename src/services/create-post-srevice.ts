import { prisma } from "../factorys/dependencies";

export class CreatePostService {
    async createPost(title: string, content: string, published: boolean, userId: number) {
        try {
           return await prisma.post.create({
                data: {
                    title,
                    content,
                    published,
                    User: {
                        connect: {
                            id: userId
                        }
                    }
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}