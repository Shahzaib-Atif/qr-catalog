import { IAuthRepository } from "@/lib/domain/interfaces"
import { SupabaseAuthRepository } from "@/lib/repositories/supabase/auth.repository";
import { supabase } from '@/utils/supabase/client';

const authRepo: IAuthRepository = new SupabaseAuthRepository(supabase);

export async function signUp(email: string, username: string, password: string) {
    return await authRepo.signUp(email, username, password);
}

export async function signIn(email: string, password: string) {
    return await authRepo.signIn(email, password);
}

export async function getUser() {
    return await authRepo.getUser();
}