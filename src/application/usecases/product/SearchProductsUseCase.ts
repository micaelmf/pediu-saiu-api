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
        // Deletar todas as propriedades de filters que sejam all ou vazias
        for (const key in filters) {
            if (filters[key] === 'all' || filters[key] === '') {
                delete filters[key];
            }
        }

        if (filters?.field === 'name') {
            filters.name = filters.term;
        }

        if (filters?.field === 'description') {
            filters.description = filters.term;
        }

        if (filters?.category) {
            filters.categoryId = filters.category;
        }

        delete filters?.field;
        delete filters?.term;
        delete filters?.category;

        return this.productRepository.findByFilters(filters);;
    }
}