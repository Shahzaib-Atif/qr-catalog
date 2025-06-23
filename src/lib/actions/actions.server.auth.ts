"use server"
import { IAuthRepository } from "@/lib/domain/interfaces"
import { SupabaseAuthRepository } from "@/lib/repositories/supabase/repo.server.auth";
import { GetUserDTO, GetUserSchema } from "../dtos/user.dto";

const authRepo: IAuthRepository = new SupabaseAuthRepository();

export async function signUp(email: string, username: string, password: string) {
    return await authRepo.signUp(email, username, password);
}

export async function signIn(email: string, password: string) {
    return await authRepo.signIn(email, password);
}

export async function getUser(): Promise<GetUserDTO> {
    const user = await authRepo.getUser();
    const userObj = { name: user.user.user_metadata.display_name, email: user.user.email }
    const parsedUser = GetUserSchema.safeParse(userObj); // Validate with Zod // based on Supabase for now
    if (parsedUser.success) {
        return parsedUser.data;
    } else {
        throw new Error("Invalid user data");
    }
}

export async function signOut() {
    return await authRepo.signOut();
}