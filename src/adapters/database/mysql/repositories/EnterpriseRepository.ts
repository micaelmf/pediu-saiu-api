// src/adapters/database/mysql/repositories/EnterpriseRepository.ts
import { PrismaClient } from '../../../../../prisma/generated/client';
import { Enterprise } from '../../../../domain/entities/Enterprise';
import { EnterpriseRepositoryInterface } from '../../../../domain/repositories/EnterpriseRepositoryInterface';

export class EnterpriseRepository implements EnterpriseRepositoryInterface {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(enterprise: Enterprise): Promise<Enterprise> {
    try {
      const createdEnterprise = await this.prisma.enterprise.create({
        data: {
          uuid: enterprise.uuid,
          name: enterprise.name,
          responsiblePerson: enterprise.responsiblePerson,
          phoneNumber: enterprise.phoneNumber,
          email: enterprise.email,
          description: enterprise.description,
          status: enterprise.status,
          planId: enterprise.planId
        },
      });

      return createdEnterprise;
    } catch (error) {
      throw new Error('Erro ao criar empresa no banco de dados.');
    }
  }

  async findById(id: number): Promise<Enterprise | null> {
    try {
      const enterprise = await this.prisma.enterprise.findUnique({
        where: {
          id,
        },
      });

      return enterprise;
    } catch (error) {
      throw new Error(`Erro ao buscar empresa pelo ID: ${id}`);
    }
  }

  async findAll(): Promise<Enterprise[]> {
    try {
      const enterprises = await this.prisma.enterprise.findMany();
      return enterprises;
    } catch (error) {
      throw new Error('Erro ao buscar todas as empresas.');
    }
  }

  async update(id: number, enterprise: Enterprise): Promise<Enterprise> {
    try {
      const updatedEnterprise = await this.prisma.enterprise.update({
        where: {
          id,
        },
        data: {
          name: enterprise.name,
          responsiblePerson: enterprise.responsiblePerson,
          phoneNumber: enterprise.phoneNumber,
          email: enterprise.email,
          description: enterprise.description,
          status: enterprise.status,
        },
      });

      return updatedEnterprise;
    } catch (error) {
      throw new Error('Erro ao atualizar empresa no banco de dados.');
    }
  }

  async delete(id: number): Promise<Enterprise> {
    try {
      return await this.prisma.enterprise.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(`Erro ao excluir empresa pelo ID: ${id}`);
    }
  }
}
