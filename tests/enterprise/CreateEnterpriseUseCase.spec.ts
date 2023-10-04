// testes/enterprise/CreateEnterpriseUseCase.spec.ts
import 'reflect-metadata';
import { container } from 'tsyringe';
import { CreateEnterpriseUseCase } from '../../src/application/usecases/enterprise/CreateEnterpriseUseCase';
import { Enterprise } from '../../src/domain/entities/Enterprise';
import '../../src/containers';

describe('CreateEnterpriseUseCase', () => {
  it('should create an enterprise', async () => {
    // Crie uma instância do CreateEnterpriseUseCase, você pode fornecer um mock do repositório aqui se necessário
    const createEnterpriseUseCase = container.resolve(CreateEnterpriseUseCase);

    // Defina os dados da empresa que você deseja criar
    const enterpriseData: Enterprise = {
      id: 2,
      uuid: 'teste',
      name: 'Empresa TESTE',
      responsiblePerson: 'Micael',
      phoneNumber: '88996609498',
      email: 'micaelmf@gmail.com',
      description: 'primeira empresa',
      status: 'ativo',
      createdAt: new Date(),
      deletedAt: new Date(),
      updatedAt: new Date()
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
