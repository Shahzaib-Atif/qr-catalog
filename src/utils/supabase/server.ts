
import { Database } from "@/types/supabase";
import { createServerClient } from "@supabase/ssr";

export const createClient = (cookieStore: any) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async getAll() {
          return (await cookieStore).getAll()
        },
        async setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              await cookieStore.set(name, value, options);
            }
          } catch (error: any) {
            console.error("Error setting cookies:", error.message);
          }
        },
      },
    },
  );
};
