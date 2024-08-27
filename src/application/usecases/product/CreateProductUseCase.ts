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
  ) { }

  async execute(productData: Product): Promise<Product> {
    try {
      const product: Product = {
        ...productData,
        uuid: ulid(),
        price: this.setPrice(productData.price, productData.free),
        free: this.convertFreeField(productData.free),
        categoryId: parseInt(String(productData.categoryId)),
        enterpriseId: 1 //TODO: Buscar o ID da empresa logada
      };

      const createdProduct = await this.productRepository.create(product);

      return createdProduct;
    } catch (error) {
      throw error; // Propague o erro para quem chamou o caso de uso
    }
  }

  private convertFreeField(free: any): boolean {
    if (typeof free === 'string' && free === 'on') {
      return true;
    }

    return false;
  }

  private setPrice(price: number, free: any): number {
    if (
      price == undefined && free
      || price == undefined && free == undefined
    ) {
      price = 0.00;
    }

    return parseFloat(price.toString().replace(',', '.'));
  }
}
