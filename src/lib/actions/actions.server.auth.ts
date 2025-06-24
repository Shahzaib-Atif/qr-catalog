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
    const { user } = await authRepo.getUser();

    // Create userDto
    const userDto = createUserDto(user);

    // return parsed userdto or throw error if invalid
    return parseUser(userDto);
}

export async function signOut() {
    return await authRepo.signOut();
}

function createUserDto(user: any) {
    const name = user?.user_metadata?.display_name
    const email = user?.email;
    const isAdmin = user?.user_metadata?.role === 'admin'

    const userObj: GetUserDTO = { name, email, isAdmin }

    return userObj;
}

function parseUser(userDto: GetUserDTO) {
    // Validate with Zod // based on Supabase for now 
    const parsedUser = GetUserSchema.safeParse(userDto);
    if (parsedUser.success) {
        return parsedUser.data;
    } else {
        throw new Error("Invalid user data");
    }
}
