// src/application/usecases/product/SearchProductsUseCase.ts

import { ProductRepositoryInterface } from '../../../domain/repositories/ProductRepositoryInterface';
import { Product } from '../../../domain/entities/Product';
import { inject, injectable } from 'tsyringe';

@injectable()
export class SearchProductsUseCase {
    constructor(
        @inject('ProductRepository')
        private productRepository: ProductRepositoryInterface
    ) { }

    public async execute(filters: Record<string, any>): Promise<Product[]> {
        return this.productRepository.findByFilters(filters);
    }
}