// src/application/usecases/product/UpdateProductUseCase.ts
import { inject, injectable } from 'tsyringe';
import { ProductRepositoryInterface } from '../../../domain/repositories/ProductRepositoryInterface';
import { Product } from '../../../domain/entities/Product';

@injectable()
export class UpdateProductUseCase {
    constructor(
        @inject('ProductRepository')
        private productRepository: ProductRepositoryInterface
    ) { }

    async execute(productId: number, updatedData: Product): Promise<Product | null> {
        try {
            updatedData.status = updatedData.status || undefined;
            updatedData.price = this.setPrice(updatedData.price, updatedData.free);

            const result = await this.productRepository.update(
                productId,
                updatedData
            );

            if (!result) {
                return null;
            }

            return updatedData;
        } catch (error) {
            throw new Error('Erro ao atualizar produto');
        }
    }

    private setPrice(price: number | string, free: boolean | string): number {
        if (price == undefined && free) {
            price = 0.00;
        }

        return parseFloat(price.toString().replace(',', '.'));
    }
}