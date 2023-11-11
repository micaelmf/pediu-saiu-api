// src/application/usecases/category/UpdateCategoryVisibilityUseCase.ts

import { CategoryRepositoryInterface } from '../../../domain/repositories/CategoryRepositoryInterface';
import { Category } from '../../../domain/entities/Category';
import { injectable, inject } from 'tsyringe';

@injectable()
export class UpdateCategoryVisibilityUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: CategoryRepositoryInterface
  ) {}

  async execute(
    categoryId: number,
    newStatus: string
  ): Promise<string | null> {
    try {
      const result = await this.categoryRepository.updateStatus(
        categoryId,
        newStatus
      );

      if (!result) {
        return null;
      }

      return newStatus;
    } catch (error) {
      throw new Error('Erro ao atualizar categoria');
    }
  }
}
