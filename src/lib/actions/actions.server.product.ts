// app/actions/productActions.ts
"use server";

import { IProductRepository } from '@/lib/domain/interfaces';
import { SupabaseProductRepository } from '@/lib/repositories/supabase/repo.server.product';

const productRepo: IProductRepository = new SupabaseProductRepository();

export async function getAllProducts() {
    return await productRepo.getAllProducts();
}

export async function getProductBySlug(slug: string) {
    return await productRepo.getProductBySlug(slug);
}

export async function getImageUrl(image_url: string) {
    return await productRepo.getImageUrl(image_url);
}
