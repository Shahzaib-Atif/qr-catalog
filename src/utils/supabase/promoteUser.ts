import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // keep this secure
);

// Promote user to admin
export async function promoteUserToAdmin(userId: string) {
    const { data, error } = await supabaseAdmin.auth.admin.updateUserById(userId, {
        user_metadata: { role: 'admin', display_name: 'admin' },
    });

    if (error) {
        console.error('Failed to promote user:', error);
        throw error;
    }

    return data;
}
