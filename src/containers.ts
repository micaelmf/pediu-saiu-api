// src/containers.ts

import { container } from 'tsyringe';
import { UserRepository } from './adapters/database/mysql/repositories/UserRepository';
import { CreateUserUseCase } from './application/usecases/user/CreateUserUseCase';
import { UserController } from './adapters/http/controllers/UserController';
import { EnterpriseRepository } from './adapters/database/mysql/repositories/EnterpriseRepository';
import { CreateEnterpriseUseCase } from './application/usecases/enterprise/CreateEnterpriseUseCase';
import { EnterpriseController } from './adapters/http/controllers/EnterpriseController';

container.register<UserRepository>('UserRepository', {
  useClass: UserRepository,
});

container.register<CreateUserUseCase>('CreateUserUseCase', {
  useClass: CreateUserUseCase,
});

container.register<UserController>('UserController', {
  useClass: UserController,
});

container.register<EnterpriseRepository>('EnterpriseRepository', {
  useClass: EnterpriseRepository,
});

container.register<CreateEnterpriseUseCase>('CreateEnterpriseUseCase', {
  useClass: CreateEnterpriseUseCase,
});

container.register<EnterpriseController>('EnterpriseController', {
  useClass: EnterpriseController,
});

export default container;
