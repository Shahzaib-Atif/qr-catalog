// lib/supabase-product-repository.ts
import { createServerComponentClient, SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { IProductRepository } from '@/lib/repositories/interfaces';
import { Product } from '@/lib/models';
import { Database } from "@/types/supabase";

export class SupabaseProductRepository implements IProductRepository {
    supabase: SupabaseClient<Database>;

    constructor() {
        this.supabase = createServerComponentClient<Database>({ cookies });
    }

    async getAllProducts(): Promise<Product[]> {
        const { data: products, error } = await this.supabase.from("products").select('*');

        if (error) {
            console.error(error);
            return [];
        }

        return products as Product[];
    }

    async getProductBySlug(slug: string): Promise<Product | null> {

        try {
            const { data: product, error } = await this.supabase
                .from('products')
                .select('*')
                .ilike('slug', slug)
                .single();

            if (error) { throw new Error(`Error fetching product by slug: ${slug} => ${error.message}`); }

            return product as Product;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getImageUrl(name: string): Promise<string | null> {
        try {
            const { data, error } = await this.supabase.storage
                .from('images')
                .createSignedUrl(name, 60); // URL valid for 60 seconds

            if (error) { throw new Error(`Error generating signed URL: ${error.message}`); }

            return data.signedUrl

        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
