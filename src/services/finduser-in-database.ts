import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class FindUserInDatabase {
    async findUserById(email: string) {
        try {
            return await prisma.user.findUnique({
                where: {
                    email
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    async findAllUsers() {
        try {
            return await prisma.user.findMany({
                include: {
                    posts: true
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}