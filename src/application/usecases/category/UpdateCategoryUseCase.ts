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
    updatedCategoryData: Category
  ): Promise<Category | null> {
    try {
      const result = await this.categoryRepository.update(
        categoryId,
        updatedCategoryData
      );

      if (!result) {
        return null;
      }

      return updatedCategoryData;
    } catch (error) {
      throw new Error('Erro ao atualizar categoria');
    }
  }
}
