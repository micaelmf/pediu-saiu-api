// src/domain/repositories/CategoryRepositoryInterface.ts
import { Category } from '../entities/Category';

export interface CategoryRepositoryInterface {
  create(product: Category): Promise<Category>;
  findById(id: number): Promise<Category | null>;
  findAll(): Promise<Category[]>;
  update(id: number, product: Category): Promise<Category>;
  delete(id: number): Promise<Category>;
}
