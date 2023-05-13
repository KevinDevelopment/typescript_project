import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class CreateUserService {
    async createUser(email: string, name: string) {
        try {
            const insertUserInDatabase = await prisma.user.create({
                data: {
                    email,
                    name
                }
            });
            return insertUserInDatabase;
        } catch (error) {
            console.error(error);
        }
    }
}


