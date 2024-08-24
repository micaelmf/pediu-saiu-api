import { inject, injectable } from "tsyringe";
import { ProductRepositoryInterface } from "../../../domain/repositories/ProductRepositoryInterface";


@injectable()
export class UpdateProductVisibilityUseCase {
    constructor(
        @inject('ProductRepository')
        private productRepository: ProductRepositoryInterface
    ) { }

    async execute(
        productId: number,
        newStatus: string
    ): Promise<string | null> {
        try {
            const result = await this.productRepository.updateStatus(
                productId,
                newStatus
            );

            if (!result) {
                return null;
            }

            return newStatus;
        } catch (error) {
            throw new Error('Erro ao atualizar produto');
        }
    }
}