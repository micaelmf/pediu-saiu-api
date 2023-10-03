// src/containers.ts

import { container } from 'tsyringe';
import { UserRepository } from './adapters/database/mysql/repositories/UserRepository';
import { CreateUserUseCase } from './application/usecases/user/CreateUserUseCase';
import { UserController } from './adapters/http/controllers/UserController';

container.register<UserRepository>('UserRepository', {
  useClass: UserRepository,
});

container.register<CreateUserUseCase>('CreateUserUseCase', {
  useClass: CreateUserUseCase,
});

container.register<UserController>('UserController', {
  useClass: UserController,
});

export default container;
