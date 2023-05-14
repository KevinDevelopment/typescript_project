import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class CreateUserService {
    async createUser(email: string, name: string) {
        try {
            return await prisma.user.create({
                data: {
                    email,
                    name
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}


