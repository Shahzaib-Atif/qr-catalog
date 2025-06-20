// lib/supabase-product-repository.ts
import { IAuthRepository } from '@/lib/domain/interfaces';
import { ActionResponse } from "@/lib/domain/models";
import { supabase } from '@/utils/supabase/client';

export class SupabaseAuthRepository implements IAuthRepository {
    async getUser(): Promise<ActionResponse> {
        try {
            const { data, error } = await supabase.auth.getUser()

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
            const { data, error } = await supabase.auth.signInWithPassword({
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
