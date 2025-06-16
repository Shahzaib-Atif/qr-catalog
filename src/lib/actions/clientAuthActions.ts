// lib/supabase-product-repository.ts
import { supabase } from '@/utils/supabase/client';
import { ActionResponse } from "@/lib/models";

export async function signIn(email: string, password: string): Promise<ActionResponse> {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        return { data, error: error?.message ?? "" };
    } catch (error: any) {
        console.error(error);
        return { data: null, error: error.message || "unknown error" };
    }
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  return { data, error: error?.message ?? "" };
}
