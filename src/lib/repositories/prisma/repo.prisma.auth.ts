import { IAuthRepository } from "@/lib/domain/interfaces";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
const prisma = new PrismaClient()

export class PrismaAuthRepository implements IAuthRepository {
    async signUp(email: string, username: string, password: string): Promise<any> {
        try {
            await prisma.user.create({
                data: {
                    username,
                    email,
                    password
                },
            })
        } catch (e: any) {
            // catch unique key constraint error from Prisma
            if (e?.code === 'P2002') {
                throw ('A user with this email already exists!')
            }
            else throw (e);
        }
    }
    async signIn(email: string, password: string): Promise<any> {
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