import { IAuthRepository } from "@/lib/domain/interfaces";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class PrismaAuthRepository implements IAuthRepository {
    async signUp(
        email: string,
        username: string,
        password: string,
    ): Promise<any> {
        try {
            await prisma.user.create({
                data: {
                    username,
                    email,
                    password,
                },
            });
        } catch (e: any) {
            // catch unique key constraint error from Prisma
            // if (e?.code === "P2002") {
            // throw "A user with this email or username already exists!";
            // } else throw e;
            throw e;
        }
    }

    // find by username or email
    async signIn(email: string, password: string) {
        const user = await prisma.user.findFirst({
            where: { OR: [{ email: email }, { username: email }] },
        });

        if (!user) {
            throw ("User not found!");
        }

        return user;
    }

    signOut(): void {
        throw new Error("Method not implemented.");
    }

    // find user by name or email
    async getUser(emailOrUsername: string): Promise<any> {
        const user = await prisma.user.findFirst({
            where: { OR: [{ email: emailOrUsername }, { username: emailOrUsername }] },
        });
        return user;
    }

    async getAllUsers(): Promise<any[]> {
        return await prisma.user.findMany();
    }
}
