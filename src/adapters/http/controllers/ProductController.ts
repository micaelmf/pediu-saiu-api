// src/adapters/http/controllers/ProductController.ts
import { Request, Response } from 'express';
import { CreateProductUseCase } from '../../../application/usecases/product/CreateProductUseCase';
import { ListProductsUseCase } from '../../../application/usecases/product/ListProductsUseCase';
// import { SearchProductsUseCase } from '../../../application/usecases/product/SearchProductsUseCase';
// import { GetProductByIdUseCase } from '../../../application/usecases/product/GetProductByIdUseCase';
// import { UpdateProductUseCase } from '../../../application/usecases/product/UpdateProductUseCase';
// import { UpdateProductVisibilityUseCase } from '../../../application/usecases/product/UpdateProductVisibilityUseCase';
import { inject, injectable } from 'tsyringe';
import { Product } from '../../../domain/entities/Product';
import { CustomRequest } from '../../../types';

@injectable()
export class ProductController {
  constructor(
    @inject('CreateProductUseCase')
    private createProductUseCase: CreateProductUseCase,
    @inject('ListProductsUseCase')
    private listProductsUseCase: ListProductsUseCase,
    // @inject('SearchProductsUseCase')
    // private searchProductsUseCase: SearchProductsUseCase,
    // @inject('GetProductByIdUseCase')
    // private getProductByIdUseCase: GetProductByIdUseCase,
    // @inject('UpdateProductUseCase')
    // private updateProductUseCase: UpdateProductUseCase,
    // @inject('UpdateProductVisibilityUseCase')
    // private updateProductVisibilityUseCase: UpdateProductVisibilityUseCase
  ) {}

  async createProduct(req: CustomRequest, res: Response): Promise<void> {
    try {
      let productData: Product = {
        ...req.body,
      };

      const createdProduct = await this.createProductUseCase.execute(
        productData
      );

      res.status(201).json(createdProduct);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar produto' });
    }
  }

  async listProducts(req: Request, res: Response): Promise<void> {
    try {
      const Products: Product[] = await this.listProductsUseCase.execute();

      res.status(200).json(Products);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar produtos' });
    }
  }

  // async searchProducts(req: CustomRequest, res: Response): Promise<void> {
  //   try {
  //     const filters: Record<string, any> = req.query;
  //     const products: Product[] = await this.searchProductsUseCase.execute(filters);
  
  //     res.status(200).json(products);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // }

  // async getProductById(req: Request, res: Response): Promise<void> {
  //   try {
  //     const productId: number = parseInt(req.params.id); // Suponha que o ID da categoria seja passado como parâmetro na URL
  //     const product: Product | null =
  //       await this.getProductByIdUseCase.execute(productId);

  //     if (product) {
  //       res.status(200).json(product);
  //     } else {
  //       res.status(404).json({ error: 'Categoria não encontrada' });
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: 'Erro ao buscar categoria por ID' });
  //   }
  // }

  // async updateProduct(req: Request, res: Response): Promise<void> {
  //   try {
  //     const productId: number = parseInt(req.params.id);
  //     const updatedData: Product = req.body;
  //     const updatedProduct = await this.updateProductUseCase.execute(
  //       productId,
  //       updatedData
  //     );

  //     res.status(200).json(updatedProduct);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Erro ao atualizar categoria' });
  //   }
  // }

  // async updateVisibility(req: Request, res: Response): Promise<void> {
  //   try {
  //     const productId: number = parseInt(req.params.id);
  //     const { status } = req.body;
  //     const updatedProduct =
  //       await this.updateProductVisibilityUseCase.execute(productId, status);

  //     res.status(200).json(updatedProduct);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Erro ao atualizar categoria' });
  //   }
  // }
}
