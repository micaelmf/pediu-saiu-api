// src/application/usecases/enterprise/CreateCategoryUseCase.ts
import { CategoryRepositoryInterface } from '../../../domain/repositories/CategoryRepositoryInterface';
import { Category } from '../../../domain/entities/Category';
import { inject, injectable } from 'tsyringe';

@injectable()
export class SearchCategoriesUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: CategoryRepositoryInterface
  ) {}

  public async execute(filters: Record<string, any>): Promise<Category[]> {
    return this.categoryRepository.findByFilters(filters);
  }
}
