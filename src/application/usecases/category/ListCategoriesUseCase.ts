// src/application/usecases/enterprise/CreateCategoryUseCase.ts
import { CategoryRepositoryInterface } from '../../../domain/repositories/CategoryRepositoryInterface';
import { Category } from '../../../domain/entities/Category';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: CategoryRepositoryInterface
  ) {}

  public async execute(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }
}
