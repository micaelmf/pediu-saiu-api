import 'reflect-metadata';
import { container } from 'tsyringe';
import '../../src/containers';
import { setupTestEnvironment, teardownTestEnvironment } from '../setupTest';

import { CreateEnterpriseUseCase } from '../../src/application/usecases/enterprise/CreateEnterpriseUseCase';

describe('CreateEnterpriseUseCase', () => {
  beforeAll(async () => {
    await setupTestEnvironment();
  });

  afterAll(async () => {
    await teardownTestEnvironment();
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

  it('should prevent duplicate companies', async () => {
    // Crie uma instância do CreateEnterpriseUseCase, você pode fornecer um mock do repositório aqui se necessário
    const createEnterpriseUseCase = container.resolve(CreateEnterpriseUseCase);
  
    // Defina os dados da empresa que você deseja criar
    const enterpriseData = {
      id: 2,
      uuid: 'teste2',
      name: 'Empresa TESTE 2',
      responsiblePerson: 'Micael',
      phoneNumber: '88996609498',
      email: 'micaelmf@gmail.com',
      description: 'primeira empresa',
      status: 'ativo',
      createdAt: new Date(),
      deletedAt: new Date(),
      updatedAt: new Date(),
    };
  
    // Tente criar a primeira empresa
    await createEnterpriseUseCase.execute(enterpriseData);
  
    try {
      // Tente criar a segunda empresa com os mesmos dados
      await createEnterpriseUseCase.execute(enterpriseData);
    } catch (error) {
      // Verifique se a exceção é lançada
      expect(error).toBeInstanceOf(Error);
      // expect(error.message).toBe('Erro ao criar empresa no banco de dados.');
    }
  });
  
});
