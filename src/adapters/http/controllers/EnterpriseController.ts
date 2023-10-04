// src/adapters/http/controllers/EnterpriseController.ts
import { Request, Response } from 'express';
import { CreateEnterpriseUseCase } from '../../../application/usecases/enterprise/CreateEnterpriseUseCase';
import { inject, injectable } from 'tsyringe';
import { Enterprise } from '../../../domain/entities/Enterprise';

@injectable()
export class EnterpriseController {
  constructor(
    @inject('CreateEnterpriseUseCase')
    private createEnterpriseUseCase: CreateEnterpriseUseCase
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

  // Implemente outros métodos de controlador relacionados à empresa aqui, como listar, atualizar, excluir, etc.
}
