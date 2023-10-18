import { container } from 'tsyringe';
import { UserRepository } from './adapters/database/mysql/repositories/UserRepository';
import { CreateUserUseCase } from './application/usecases/user/CreateUserUseCase';
import { EditUserUseCase } from './application/usecases/user/EditUserUseCase'; // Importe o EditUserUseCase
import { UserController } from './adapters/http/controllers/UserController';
import { EnterpriseRepository } from './adapters/database/mysql/repositories/EnterpriseRepository';
import { CreateEnterpriseUseCase } from './application/usecases/enterprise/CreateEnterpriseUseCase';
import { EnterpriseController } from './adapters/http/controllers/EnterpriseController';
import { BrevoEmailService } from './domain/services/BrevoEmailService';

container.register<UserRepository>('UserRepository', {
  useClass: UserRepository,
});

container.register<CreateUserUseCase>('CreateUserUseCase', {
  useClass: CreateUserUseCase,
});

container.register<EditUserUseCase>('EditUserUseCase', {
  useClass: EditUserUseCase,
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

container.register<BrevoEmailService>('BrevoEmailService', {
  useClass: BrevoEmailService,
});

export default container;
