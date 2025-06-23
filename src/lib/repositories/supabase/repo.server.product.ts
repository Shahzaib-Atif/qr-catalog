// lib/supabase-product-repository.ts
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { IProductRepository } from '@/lib/domain/interfaces';
import { Product } from '@/lib/domain/models';
import { Database } from "@/types/supabase";

export class SupabaseProductRepository implements IProductRepository {
    async getAllProducts(): Promise<Product[] | null> {
        try {
            const supabase = this.createClient();
            const { data: products, error } = await supabase.from("products").select('*');
            if (error) { throw new Error(`Error fetching all products => ${error.message}`); }
            return products as Product[];
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }

    async getProductBySlug(slug: string): Promise<Product | null> {
        try {
            const supabase = this.createClient();
            const { data: product, error } = await supabase
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
            const supabase = this.createClient();
            const { data, error } = await supabase.storage
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

    private createClient() {
        return createServerComponentClient<Database>({ cookies });
    }
}
