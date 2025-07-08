"use server";
import { IAuthRepository } from "../domain/interfaces";
import { PrismaAuthRepository } from "../repositories/prisma/repo.prisma.auth";

const authRepo: IAuthRepository = new PrismaAuthRepository();

export async function signUp(
    email: string,
    username: string,
    password: string,
) {
    try {
        await authRepo.signUp(email, username, password);
        return { success: true, message: "user created successfully!" };

    } catch (error: any) {
        const errorMsg =
            typeof error == "string"
                ? error
                : error.message || "unable to create user!";

        await new Promise((res, rej) => {
            setTimeout(res, 1000)
        })
        return { success: false, message: errorMsg };

    }
}
