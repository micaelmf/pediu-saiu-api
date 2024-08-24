import { inject, injectable } from "tsyringe";
import { Product } from "../../../domain/entities/Product";
import { ProductRepositoryInterface } from "../../../domain/repositories/ProductRepositoryInterface";

@injectable()
export class GetProductByIdUseCase {
    constructor(
        @inject('ProductRepository')
        private productRepository: ProductRepositoryInterface
    ) { }

    async execute(productId: number): Promise<Product | null> {
        try {
            const product = await this.productRepository.findById(productId);

            return product || null;
        } catch (error) {
            throw new Error('Erro ao buscar produto por ID');
        }
    }
}