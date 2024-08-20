// src/adapters/database/mysql/repositories/CategoryRepository.ts

import { PrismaClient } from '../../../../../prisma/generated/client';
import { Category } from '../../../../domain/entities/Category';
import { CategoryRepositoryInterface } from '../../../../domain/repositories/CategoryRepositoryInterface';

export class CategoryRepository implements CategoryRepositoryInterface {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(category: Category): Promise<Category> {
    try {
      const createdCategory = await this.prisma.category.create({
        data: {
          uuid: category.uuid,
          name: category.name,
          description: category.description,
          status: category.status,
          enterpriseId: category.enterpriseId,
        },
      });

      return createdCategory;
    } catch (error) {
      throw new Error('Erro ao criar categoria no banco de dados.');
    }
  }

  async findById(id: number): Promise<Category | null> {
    try {
      const category = await this.prisma.category.findUnique({
        where: {
          id,
        },
      });

      return category;
    } catch (error) {
      throw new Error(`Erro ao buscar categoria pelo ID: ${id}`);
    }
  }

  async findAll(): Promise<Category[]> {
    try {
      const categories = await this.prisma.category.findMany({
        where: {
          status: {
            not: 'deleted',
          },
        },
      });

      return categories;
    } catch (error) {
      throw new Error('Erro ao buscar todos os produtos.');
    }
  }

  async findByFilters(filters: Record<string, any>): Promise<Category[]> {
    try {
      const categories = await this.prisma.category.findMany({
        where: {
          name: {
            contains: filters?.name || undefined,
          },
          status: filters?.status || undefined,
        },
      });
      return categories;
    } catch (error) {
      throw new Error('Erro ao buscar categorias por nome.');
    }
  }

  async update(id: number, category: Category): Promise<Category> {
    try {
      const updatedCategory = await this.prisma.category.update({
        where: {
          id,
        },
        data: {
          uuid: category.uuid,
          name: category.name,
          description: category.description,
          status: category.status,
          enterpriseId: category.enterpriseId,
        },
      });

      return updatedCategory;
    } catch (error) {
      throw new Error('Erro ao atualizar categoria no banco de dados.');
    }
  }

  async updateStatus(id: number, status: string): Promise<boolean> {
    try {
      await this.prisma.category.update({
        where: {
          id,
        },
        data: {
          status,
        },
      });

      return true;
    } catch (error) {
      throw new Error(`Erro ao atualizar o status da categoria com ID: ${id}`);
    }
  }

  async delete(id: number): Promise<Category> {
    try {
      return await this.prisma.category.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(`Erro ao excluir categoria pelo ID: ${id}`);
    }
  }
}
