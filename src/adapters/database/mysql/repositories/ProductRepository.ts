// src/adapters/database/mysql/repositories/ProductRepository.ts

import { PrismaClient } from '../../../../../prisma/generated/client';
import { Product } from '../../../../domain/entities/Product';
import { ProductRepositoryInterface } from '../../../../domain/repositories/ProductRepositoryInterface';

export class ProductRepository implements ProductRepositoryInterface {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(product: Product): Promise<Product> {
    try {
      const createdProduct = await this.prisma.product.create({
        data: {
          uuid: product.uuid,
          name: product.name,
          description: product.description,
          type: product.type,
          price: product.price,
          free: product.free,
          status: product.status,
          additionalsMax: product.additionalsMax,
          accompanimentsMax: product.accompanimentsMax,
          categoryId: product.categoryId,
          enterpriseId: product.enterpriseId,
        },
      });

      return createdProduct;
    } catch (error) {
      throw new Error('Erro ao criar produto no banco de dados.');
    }
  }

  async findById(id: number): Promise<Product | null> {
    try {
      const product = await this.prisma.product.findUnique({
        where: {
          id,
        },
      });

      return product;
    } catch (error) {
      throw new Error(`Erro ao buscar produto pelo ID: ${id}`);
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.prisma.product.findMany();
      return products;
    } catch (error) {
      throw new Error('Erro ao buscar todos os produtos.');
    }
  }

  async findByFilters(filters: Record<string, any>): Promise<Product[]> {
    try {
      const products = await this.prisma.product.findMany({
        where: {
          name: {
            contains: filters?.name || undefined,
          },
          status: filters?.status || undefined,
          type: filters?.type || undefined,
          free: filters?.free || undefined,
          price: filters?.price || undefined,
          categoryId: filters?.categoryId || undefined,
          enterpriseId: filters?.enterpriseId || undefined,
          accompanimentsMax: filters?.accompanimentsMax || undefined,
          additionalsMax: filters?.additionalsMax || undefined
        },
      });

      return products;
    } catch (error) {
      throw new Error('Erro ao buscar produtos pelos filtros.');
    }
  }

  async update(id: number, product: Product): Promise<Product> {
    try {
      const updatedProduct = await this.prisma.product.update({
        where: {
          id,
        },
        data: {
          uuid: product.uuid,
          name: product.name,
          description: product.description,
          type: product.type,
          price: product.price,
          free: product.free,
          status: product.status,
          additionalsMax: product.additionalsMax,
          accompanimentsMax: product.accompanimentsMax,
          categoryId: product.categoryId,
          enterpriseId: product.enterpriseId,
        },
      });

      return updatedProduct;
    } catch (error) {
      throw new Error('Erro ao atualizar produto no banco de dados.');
    }
  }

  async delete(id: number): Promise<Product> {
    try {
      return await this.prisma.product.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(`Erro ao excluir produto pelo ID: ${id}`);
    }
  }
}
