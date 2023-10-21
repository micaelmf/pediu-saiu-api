// src/adapters/http/controllers/EnterpriseController.ts
import { Request, Response } from 'express';
import { CreateEnterpriseUseCase } from '../../../application/usecases/enterprise/CreateEnterpriseUseCase';
import { ListEnterprisesUseCase } from '../../../application/usecases/enterprise/ListEnterprisesUseCase';
import { inject, injectable } from 'tsyringe';
import { Enterprise } from '../../../domain/entities/Enterprise';

@injectable()
export class EnterpriseController {
  constructor(
    @inject('CreateEnterpriseUseCase') private createEnterpriseUseCase: CreateEnterpriseUseCase,
    @inject('ListEnterprisesUseCase') private listEnterprisesUseCase: ListEnterprisesUseCase
  ) {}

  async createEnterprise(req: Request, res: Response): Promise<void> {
    try {
      // Obtenha os dados da empresa do corpo da solicitação
      const enterpriseData: Enterprise = req.body;
      
      // Chame o caso de uso para criar a empresa e obtenha a resposta
      const createdEnterprise = await this.createEnterpriseUseCase.execute(
        enterpriseData
      );

      // Retorne a resposta com a empresa criada.
      res.status(201).json(createdEnterprise);
    } catch (error) {
      // console.error(error);
      res.status(500).json({ error: 'Erro ao criar empresa' });
    }
  }

  async listEnterprises(req: Request, res: Response): Promise<void> {
    try {
      // Chame o caso de uso para listar empresas e obtenha a resposta
      const enterprises: Enterprise[] = await this.listEnterprisesUseCase.execute();

      // Retorne a lista de empresas como resposta
      res.status(200).json(enterprises);
    } catch (error) {
      // console.error(error);
      res.status(500).json({ error: 'Erro ao listar empresas' });
    }
  }

  // Implemente outros métodos de controlador relacionados à empresa aqui, como listar, atualizar, excluir, etc.
}
