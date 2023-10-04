// src/application/usecases/enterprise/CreateEnterpriseUseCase.ts
import { EnterpriseRepositoryInterface } from '../../../domain/repositories/EnterpriseRepositoryInterface';
import { Enterprise } from '../../../domain/entities/Enterprise';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateEnterpriseUseCase {
  constructor(
    @inject('EnterpriseRepository')
    private enterpriseRepository: EnterpriseRepositoryInterface
  ) {}

  async execute(enterprise: Enterprise): Promise<Enterprise> {
    try {
      // Implemente a lógica para criar uma empresa aqui.
      const createdEnterprise = await this.enterpriseRepository.create(
        enterprise
      );
      return createdEnterprise;
    } catch (error) {
      // Trate os erros apropriadamente
      // throw new Error('Erro ao criar empresa');
    }
  }
}
