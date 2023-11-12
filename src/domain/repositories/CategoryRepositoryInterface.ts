// src/domain/repositories/CategoryRepositoryInterface.ts
import { Category } from '../entities/Category';

export interface CategoryRepositoryInterface {
  create(category: Category): Promise<Category>;
  findById(id: number): Promise<Category | null>;
  findAll(): Promise<Category[]>;
  findByFilters(filters: Record<string, any>): Promise<Category[]>;
  update(id: number, category: Category): Promise<Category>;
  updateStatus(id: number, status: string): Promise<boolean>;
  delete(id: number): Promise<Category>;
}
