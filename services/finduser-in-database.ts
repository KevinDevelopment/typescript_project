import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class FindUserInDatabase {
    async findUserById(email: string) {
        try {
            const findUserInDatabase = await prisma.user.findUnique({
                where: {
                    email
                }
            });
            return findUserInDatabase;
        } catch (error) {
            console.error(error);
        }
    }

    async findAllUsers() {
        try {
            const findAllUsers = await prisma.user.findMany({
                include: {
                    posts: true
                }
            });
            return findAllUsers;
        } catch (error) {
            console.error(error);
        }
    }
}