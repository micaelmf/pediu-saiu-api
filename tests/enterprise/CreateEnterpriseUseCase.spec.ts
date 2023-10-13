// testes/enterprise/CreateEnterpriseUseCase.spec.ts
import 'reflect-metadata';
import { container } from 'tsyringe';
import { CreateEnterpriseUseCase } from '../../src/application/usecases/enterprise/CreateEnterpriseUseCase';

import { Enterprise } from '../../src/domain/entities/Enterprise';
import '../../src/containers';

// import { PrismaClient } from '../../prisma/generated/client';
import prisma from '../prisma'; // Importe a instância do Prisma
const { exec } = require('child_process');

async function createDatabase() {
  try {
    await prisma.$executeRaw`CREATE DATABASE IF NOT EXISTS test_pediu_saiu_wsl`;
    console.log('Banco de dados criado com sucesso: test_pediu_saiu_wsl');

    // Conecte-se ao banco de dados recém-criado
    await prisma.$connect();
    console.log('conectou');

    // Execute migrações
    // Comando de migração do Prisma (substitua com o comando real que você deseja executar)
    // const prismaMigrationCommand = 'npx prisma migrate deploy --schema ./prisma/schema.test.prisma';

    // await exec(prismaMigrationCommand, (error:any, stdout:any, stderr:any) => {
    //   if (error) {
    //     console.error(`Erro ao executar o comando de migração: ${error}`);
    //     return;
    //   }
    // });
    
  } catch (error) {
    console.error('Erro ao criar o banco de dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function applyMigrations() {
  return new Promise((resolve, reject) => {
    const prismaMigrateCommand = 'npx prisma migrate deploy --schema ./prisma/schema.test.prisma';

    exec(prismaMigrateCommand, (error: any, stdout: any, stderr:any) => {
      if (error) {
        reject(error);
      } else {
        console.log('Migrations applied successfully');
        resolve("");
      }
    });
  });
}



describe('CreateEnterpriseUseCase', () => {
  beforeAll(async () => {
    // Realiza qualquer inicialização necessária
    await createDatabase();
    // await applyMigrations();
  },60000);

  afterAll(async () => {
    // Realiza qualquer limpeza necessária
    // await prisma.$executeRaw`DROP DATABASE test_pediu_saiu_wsl`;
    // console.log('dropou');
    await prisma.$disconnect();
    console.log('desconectou');
  });

  it('should create an enterprise', async () => {
    // Crie uma instância do CreateEnterpriseUseCase, você pode fornecer um mock do repositório aqui se necessário
    const createEnterpriseUseCase = container.resolve(CreateEnterpriseUseCase);

    // Defina os dados da empresa que você deseja criar
    const enterpriseData = {
      id: 11,
      uuid: 'teste4',
      name: 'Empresa TESTE 3',
      responsiblePerson: 'Micael',
      phoneNumber: '88996609498',
      email: 'micaelmf@gmail.com',
      description: 'primeira empresa',
      status: 'ativo',
      createdAt: new Date(),
      deletedAt: new Date(),
      updatedAt: new Date(),
    };

    // Chame o método execute do caso de uso
    const createdEnterprise = await createEnterpriseUseCase.execute(
      enterpriseData
    );

    // Verifique se a empresa foi criada corretamente
    expect(createdEnterprise).toBeDefined();
    expect(createdEnterprise.id).toBeDefined();
    // ... adicione mais asserções conforme necessário ...
  });
});
