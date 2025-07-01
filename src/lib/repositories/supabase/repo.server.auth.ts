// lib/supabase-product-repository.ts
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { IAuthRepository } from '@/lib/domain/interfaces';
import { Database } from "@/types/supabase";
import { listUsers } from "@/utils/supabase/listUsers";

export class SupabaseAuthRepository implements IAuthRepository {

    async getUser() {
        const supabase = this.createClient();
        const { data, error } = await supabase.auth.getUser()

        if (error)
            throw (error);
        else
            return data;
    }

    async getAllUsers() {
        const supabase = this.createClient();
        const { data, error } = await listUsers()

        if (error)
            throw (error);
        else
            return data?.users
    }

    async signUp(email: string, username: string, password: string) {
        const supabase = this.createClient();
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
        const supabase = this.createClient();
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
        const supabase = this.createClient();
        const { error } = await supabase.auth.signOut();
        if (error) throw (error);
    }

    private createClient() {
        return createServerComponentClient<Database>({ cookies });
    }
}
