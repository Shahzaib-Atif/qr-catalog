import { IAuthRepository } from "@/lib/domain/interfaces";
import { PrismaClient } from "generated/prisma";
const prisma = new PrismaClient()

export class PrismaAuthRepository implements IAuthRepository {
    async signUp(email: string, username: string, password: string): Promise<any> {
        await prisma.user.create({
            data: {
                username, 
                email,
                password
            },
        })
    }
    signIn(email: string, password: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    signOut(): void {
        throw new Error("Method not implemented.");
    }
    getUser(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async getAllUsers(): Promise<any[]> {
        return await prisma.user.findMany()
    }

}