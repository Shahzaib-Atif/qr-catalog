"use server"
import { IAuthRepository } from "../domain/interfaces";
import { PrismaAuthRepository } from "../repositories/prisma/repo.prisma.auth";

const authRepo: IAuthRepository = new PrismaAuthRepository();

export async function signUp(email: string, username: string, password: string) {
    try {
        await authRepo.signUp(email, username, password);
        return { success: true, message: "user created successfully!" }
    } catch (error: any) {
        return { success: false, message: error.message || "unable to create user!" }
    }
}