
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
      },
    },
  );
};
