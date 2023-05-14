import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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