// src/domain/repositories/ProductRepositoryInterface.ts
import { Product } from '../entities/Product';

export interface ProductRepositoryInterface {
  create(product: Product): Promise<Product>;
  findById(id: number): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  findByFilters(filters: Record<string, any>): Promise<Product[]>;
  update(id: number, product: Product): Promise<Product>;
  updateStatus(id: number, status: string): Promise<boolean>;
  delete(id: number): Promise<Product>;
}
