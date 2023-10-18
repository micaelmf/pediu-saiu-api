// src/adapters/database/mysql/repositories/UserRepository.ts
import { UserRepositoryInterface } from '../../../../domain/repositories/UserRepositoryInterface';
import { User } from '../../../../domain/entities/User';

// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../../../../../prisma/generated/client';

export class UserRepository implements UserRepositoryInterface {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(user: User): Promise<User> {
    try {
      const createdUser = await this.prisma.user.create({
        data: {
          // Mapeie os campos do objeto User para o formato do banco de dados aqui
          uuid: user.uuid,
          email: user.email,
          nickname: user.nickname,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
          enterpriseId: user.enterpriseId,
        },
      });

      return createdUser;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao criar usuário no banco de dados.');
    }
  }

  async findByUuid(uuid: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        uuid,
      },
    });
  }

  async findAll(): Promise<User[]> {
    try {
      const users = await this.prisma.user.findMany();
      return users;
    } catch (error) {
      throw new Error('Erro ao buscar todos os usuários.');
    }
  }

  async update(user: User): Promise<User> {
    try {
      return await this.prisma.user.update({
        where: {
          uuid: user.uuid,
        },
        data: {
          email: user.email,
          nickname: user.nickname,
          role: user.role,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(uuid: string): Promise<User> {
    try {
      return await this.prisma.user.delete({
        where: {
          uuid,
        },
      });
    } catch (error) {
      throw new Error(`Erro ao excluir usuário pelo uuid: ${uuid}`);
    }
  }
}
