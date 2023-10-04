// src/domain/repositories/EnterpriseRepositoryInterface.ts
import { Enterprise } from '../entities/Enterprise';

export interface EnterpriseRepositoryInterface {
  create(enterprise: Enterprise): Promise<Enterprise>;
  findById(id: number): Promise<Enterprise | null>;
  findAll(): Promise<Enterprise[]>;
  update(id: number, enterprise: Enterprise): Promise<Enterprise>;
  delete(id: number): Promise<Enterprise>;
}
