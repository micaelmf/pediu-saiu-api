import 'reflect-metadata';
import request from 'supertest';
import express, { Router } from 'express'; // Importe também Router do Express

import { container } from 'tsyringe';
import { EnterpriseController } from '../../src/adapters/http/controllers/EnterpriseController';
import { CreateEnterpriseUseCase } from '../../src/application/usecases/enterprise/CreateEnterpriseUseCase';
import { Enterprise } from '../../src/domain/entities/Enterprise';
import '../../src/containers';

describe('EnterpriseController', () => {
  it('should create an enterprise via API', async () => {
    const app = express();
    const router = Router(); // Crie um novo Router do Express

    // Crie instâncias dos casos de uso e controladores
    const createEnterpriseUseCase = container.resolve(CreateEnterpriseUseCase);
    const enterpriseController = new EnterpriseController(
      createEnterpriseUseCase
    );

    // Adicione a rota ao aplicativo
    app.use(express.json());

    // Defina a rota de criação de empresa diretamente no router
    router.post('/', async (req, res) => {
      await enterpriseController.createEnterprise(req, res);
    });

    // Registre o router no aplicativo
    app.use('/enterprises', router);

    // Defina os dados da empresa que você deseja criar
    const enterpriseData: Enterprise = {
      id: 2,
      uuid: 'teste5',
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

    // Faça uma solicitação POST para criar uma empresa
    const response = await request(app)
      .post('/enterprises')
      .send(enterpriseData);

    // Verifique a resposta da API
    expect(response.status).toBe(201);
    expect(response.body).toBeDefined();
    expect(response.body.id).toBeDefined();
    // ... adicione mais asserções conforme necessário ...
  });
});
