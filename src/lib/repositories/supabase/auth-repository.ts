// lib/supabase-product-repository.ts
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { IAuthRepository } from '@/lib/repositories/interfaces';
import { Database } from "@/types/supabase";
import { ActionResponse } from "@/lib/models";

export class SupabaseAuthRepository implements IAuthRepository {

    async signUp(email: string, username: string, password: string): Promise<ActionResponse> {
        try {
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
            const supabase = this.createClient();
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

    private createClient() {
        return createServerComponentClient<Database>({ cookies });
    }
}
