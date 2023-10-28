// src/application/usecases/category/UpdateCategoryUseCase.ts

import { CategoryRepositoryInterface } from '../../../domain/repositories/CategoryRepositoryInterface';
import { Category } from '../../../domain/entities/Category';
import { injectable, inject } from 'tsyringe';

@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: CategoryRepositoryInterface
  ) {}

  async execute(
    categoryId: number,
    updatedCategory: Category
  ): Promise<Category | null> {
    try {
      updatedCategory.status = updatedCategory.status || undefined;

      const result = await this.categoryRepository.update(
        categoryId,
        updatedCategory
      );

      if (!result) {
        return null;
      }

      return updatedCategory;
    } catch (error) {
      throw new Error('Erro ao atualizar categoria');
    }
  }
}
