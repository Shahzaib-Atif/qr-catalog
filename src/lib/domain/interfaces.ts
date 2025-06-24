// lib/interfaces/product-repository.ts

import { ActionResponse, Product } from "@/lib/domain/models";
import { GetUserDTO } from "../dtos/user.dto";

export interface IProductRepository {
  getImageUrl(image_url: string): Promise<string | null>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getAllProducts(): Promise<Product[] | null>;
}

export interface IAuthRepository {
  signUp(email: string, username: string, password: string): Promise<any>;
  signIn(email: string, password: string): Promise<any>;
  signOut(): void;
  getUser(): Promise<any>;
  getAllUsers(): Promise<any[]>;
}
