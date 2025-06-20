// lib/supabase-product-repository.ts
import { IAuthRepository } from '@/lib/domain/interfaces';
import { ActionResponse } from "@/lib/domain/models";
import { SupabaseClient } from '@supabase/supabase-js';

export class SupabaseAuthRepository implements IAuthRepository {
    constructor(private supabaseClient: SupabaseClient) { }

    async getUser(): Promise<ActionResponse> {
        try {
            const { data, error } = await this.supabaseClient.auth.getUser()

            if (error)
                return { data: null, error: error.message }
            else
                return { data, error: "" };
        } catch (error: any) {
            console.error(error);
            return { data: null, error: error.message };
        }
    }

    async signUp(email: string, username: string, password: string): Promise<ActionResponse> {
        try {
            const { data, error } = await this.supabaseClient.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        display_name: username
                    }
                }
            })

            if (error)
                return { data: null, error: error.message }
            else
                return { data, error: "" };
        } catch (error: any) {
            console.error(error);
            return { data: null, error: error.message };
        }
    }

    async signIn(email: string, password: string): Promise<ActionResponse> {
        try {
            const { data, error } = await this.supabaseClient.auth.signInWithPassword({
                email,
                password,
            })

            if (error)
                return { data: null, error: error.message }
            else
                return { data, error: "" };
        } catch (error: any) {
            console.error(error);
            return { data: null, error: error.message };
        }
    }

}
