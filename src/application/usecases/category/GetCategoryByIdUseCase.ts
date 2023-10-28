// src/application/usecases/category/GetCatetoryByIdUseCase.ts
import { CategoryRepositoryInterface } from '../../../domain/repositories/CategoryRepositoryInterface';
import { Category } from '../../../domain/entities/Category';
import { inject, injectable } from 'tsyringe';

@injectable()
export class GetCategoryByIdUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: CategoryRepositoryInterface
  ) {}

  async execute(categoryId: number): Promise<Category | null> {
    try {
      const category = await this.categoryRepository.findById(categoryId);

      return category || null;
    } catch (error) {
      throw new Error('Erro ao buscar categoria por ID');
    }
  }
}
