/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import 'reflect-metadata';
import { container } from 'tsyringe';
import '../../src/containers';

import { CreateEnterpriseUseCase } from '../../src/application/usecases/enterprise/CreateEnterpriseUseCase';


describe('CreateEnterpriseUseCase', () => {
  
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
