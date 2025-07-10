"use server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { IAuthRepository } from "../domain/interfaces";
import { GetUserSchema } from "../dtos/user.dto";
import { PrismaAuthRepository } from "../repositories/prisma/repo.prisma.auth";

const authRepo: IAuthRepository = new PrismaAuthRepository();

export async function signUp(
    email: string,
    username: string,
    password: string,
) {
    return { success: false, message: 'Cannot signup new users! Please contact website administrator!' };

    try {
        // make sure email and username are present
        if (!email || !username) { throw ("invalid username or email") }

        // hash password and make username case insensitive
        const hashedPassword = await bcrypt.hash(password, 10);
        const usernameLowerCase = username.toLowerCase();

        // create user in repo and return a success message
        await authRepo.signUp(email, usernameLowerCase, hashedPassword);
        return { success: true, message: "user created successfully!" };
    } catch (error: any) {
        const errorMsg =
            typeof error == "string"
                ? error
                : error.message || "unable to create user!";

        return { success: false, message: errorMsg };
    }
}

export async function signIn(username: string, password: string) {
    try {
        // validate user
        if (!username) { throw ("invalid username or email") }
        const envUser = process.env.DEFAULT_ADMIN_USERNAME;
        if (!envUser) { throw ("Unable to read from env!") }
        const isUserValid = envUser?.toLowerCase() === username?.toLowerCase();
        if (!isUserValid) { throw ("User not found!"); }

        // validate password
        const envPwd = process.env.DEFAULT_ADMIN_PWD;
        if (!envPwd) { throw ("Unable to read from env!") }
        const isPassValid = envPwd === password;
        if (!isPassValid) { throw ("Invalid password!"); }

        // set cookie and return success message
        await setCookie();
        return { success: true, message: "user logged in successfully!" };


        // not fetching from repo for the timebeing
        // get user from repo (case insensitive)
        // const user = await authRepo.getUser(usernameOrEmail.toLowerCase());
        // if (!user) { throw ("User not found!"); }

        // apply dto parsing
        // const parsedUser = GetUserSchema.safeParse({
        //     name: user.username,
        //     email: user.email,
        //     isAdmin: user.isAdmin
        // });

        // if (parsedUser.success) {
        //     const { name, email, isAdmin } = parsedUser.data;

        //     await setCookie()
        //     return { success: true, message: "user logged in successfully!" };
        // } else
        //     return { success: false, message: "An error occured while parsing the data!" };

    } catch (error: any) {
        console.log(error);

        const errorMsg =
            typeof error == "string"
                ? error
                : error.message || "unable to login!";

        return { success: false, message: errorMsg };
    }
}

export async function signOut() {
    (await cookies()).delete("session")
}

// set session cookie for admin user
async function setCookie() {
    // Set cookie (simplified session)
    (await
        cookies()).set("session", JSON.stringify({ name: 'admin', isAdmin: true }), {
            httpOnly: true,
            path: "/",
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7, // 1 week
        })
}

