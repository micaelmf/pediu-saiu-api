// src/application/usecases/enterprise/CreateEnterpriseUseCase.ts
import { EnterpriseRepositoryInterface } from '../../../domain/repositories/EnterpriseRepositoryInterface';
import { Enterprise } from '../../../domain/entities/Enterprise';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListEnterprisesUseCase {
  constructor(
    @inject('EnterpriseRepository')
    private enterpriseRepository: EnterpriseRepositoryInterface
  ) {}

  public async execute(): Promise<Enterprise[]> {
      return await this.enterpriseRepository.findAll();
  }
}
