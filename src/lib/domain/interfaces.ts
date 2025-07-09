// lib/interfaces/product-repository.ts

import { Product } from "@/lib/domain/models";

export interface IProductRepository {
  getImageUrl(image_url: string): Promise<string | null>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getAllProducts(): Promise<Product[] | null>;
}

export interface IAuthRepository {
  signUp(email: string, username: string, password: string): Promise<any>;
  signIn(email: string, password: string): Promise<any>;
  signOut(): void;
  getUser(emailOrUsername: string): Promise<any>;
  getAllUsers(): Promise<any[]>;
}
