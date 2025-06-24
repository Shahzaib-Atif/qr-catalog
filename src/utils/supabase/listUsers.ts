import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // keep this secure
);

// Promote user to admin
export async function listUsers() {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers()

    if (error) {
        console.error('Failed to promote user:', error);
        throw error;
    }

    return { data, error };
}
