// src/application/usecases/category/CreateCategoryUseCase.ts
import { CategoryRepositoryInterface } from '../../../domain/repositories/CategoryRepositoryInterface';
import { Category } from '../../../domain/entities/Category';
import { inject, injectable } from 'tsyringe';
import { ulid } from 'ulid';

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
        uuid: ulid(),
        status: category.status || undefined,
      };

      console.log('categoryData', categoryData);

      const createdCategory = await this.categoryRepository.create(
        categoryData
      );

      return createdCategory;
    } catch (error) {
      throw error; // Propague o erro para quem chamou o caso de uso
    }
  }
}
