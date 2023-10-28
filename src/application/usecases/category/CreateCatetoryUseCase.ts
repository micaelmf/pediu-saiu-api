// src/application/usecases/category/CreateCategoryUseCase.ts
import { CategoryRepositoryInterface } from '../../../domain/repositories/CategoryRepositoryInterface';
import { Category } from '../../../domain/entities/Category';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: CategoryRepositoryInterface
  ) {}

  async execute(category: Category): Promise<Category> {
    try {
      
      const categoryData: Category = {
        ...category,
        status: category.status || 'visible'
      }

      const createdCategory = await this.categoryRepository.create(
        category
      );

      return createdCategory;
    } catch (error) {
      // Aqui você pode tratar o erro de acordo com suas necessidades
      throw error; // Propague o erro para quem chamou o caso de uso
    }
  }
}
