// lib/supabase-product-repository.ts
import { IAuthRepository } from '@/lib/domain/interfaces';
import { supabase } from '@/utils/supabase/client';

export class SupabaseAuthRepository implements IAuthRepository {
    async getUser() {
        const { data, error } = await supabase.auth.getUser()

        if (error)
            throw (error);
        else
            return data;
    }

    async signUp(email: string, username: string, password: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    display_name: username
                }
            }
        })

        if (error)
            throw (error);
        else
            return data;
    }

    async signIn(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error)
            throw (error);
        else
            return data;
    }

    async signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) throw (error);
    }

}
