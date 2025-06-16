// lib/interfaces/product-repository.ts

import { ActionResponse, Product } from "@/lib/models";

export interface IProductRepository {
  getImageUrl(image_url: string): Promise<string | null>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getAllProducts(): Promise<Product[] | null>;
}

export interface IAuthRepository {
  signUp(email: string, username: string, password: string): Promise<ActionResponse>;
}
