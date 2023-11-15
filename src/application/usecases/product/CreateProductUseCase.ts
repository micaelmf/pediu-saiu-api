// src/application/usecases/product/CreateProductUseCase.ts
import { ProductRepositoryInterface } from '../../../domain/repositories/ProductRepositoryInterface';
import { Product } from '../../../domain/entities/Product';
import { inject, injectable } from 'tsyringe';
import { ulid } from 'ulid';

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: ProductRepositoryInterface
  ) {}

  async execute(product: Product): Promise<Product> {
    try {
      const productData: Product = {
        ...product,
        uuid: ulid(),
        status: product.status || undefined,
      };

      const createdProduct = await this.productRepository.create(
        productData
      );

      return createdProduct;
    } catch (error) {
      throw error; // Propague o erro para quem chamou o caso de uso
    }
  }
}
