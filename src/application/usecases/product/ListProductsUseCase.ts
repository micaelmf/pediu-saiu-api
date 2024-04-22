// src/application/usecases/enterprise/ListProductsUseCase.ts
import { ProductRepositoryInterface } from '../../../domain/repositories/ProductRepositoryInterface';
import { Product } from '../../../domain/entities/Product';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: ProductRepositoryInterface
  ) {}

  public async execute(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
}
