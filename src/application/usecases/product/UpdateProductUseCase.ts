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
            const product: Product = {
                ...updatedData,
                price: this.setPrice(updatedData.price, updatedData.free),
                free: this.convertFreeField(updatedData.free),
                categoryId: parseInt(String(updatedData.categoryId)),
                enterpriseId: 1 //TODO: Buscar o ID da empresa logada
            };

            const result = await this.productRepository.update(
                productId,
                product
            );

            if (!result) {
                return null;
            }

            return updatedData;
        } catch (error) {
            throw new Error('Erro ao atualizar produto');
        }
    }

    private convertFreeField(free: any): boolean {
        if (typeof free === 'string' && free === 'on') {
            return true;
        }

        return false;
    }

    private setPrice(price: number | string, free: boolean | string): number {
        if (
            price == undefined && free
            || price == undefined && free == undefined
        ) {
            price = 0.00;
        }

        return parseFloat(price.toString().replace(',', '.'));
    }
}