import { container } from 'tsyringe';
import { UserRepository } from './adapters/database/mysql/repositories/UserRepository';
import { CreateUserUseCase } from './application/usecases/user/CreateUserUseCase';
import { EditUserUseCase } from './application/usecases/user/EditUserUseCase'; // Importe o EditUserUseCase
import { UserController } from './adapters/http/controllers/UserController';
import { EnterpriseRepository } from './adapters/database/mysql/repositories/EnterpriseRepository';
import { CreateEnterpriseUseCase } from './application/usecases/enterprise/CreateEnterpriseUseCase';
import { EnterpriseController } from './adapters/http/controllers/EnterpriseController';
import { BrevoEmailService } from './domain/services/BrevoEmailService';
import { LoginUseCase } from './application/usecases/auth/LoginUseCase';
import { ListEnterprisesUseCase } from './application/usecases/enterprise/ListEnterprisesUseCase';
import { CategoryController } from './adapters/http/controllers/CategoryController';
import { ListCategoriesUseCase } from './application/usecases/category/ListCategoriesUseCase';
import { CreateCategoryUseCase } from './application/usecases/category/CreateCatetoryUseCase';
import { GetCategoryByIdUseCase } from './application/usecases/category/GetCategoryByIdUseCase';
import { CategoryRepository } from './adapters/database/mysql/repositories/CategoryRepository';
import { UpdateCategoryUseCase } from './application/usecases/category/UpdateCategoryUseCase';

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

container.register<ListEnterprisesUseCase>('ListEnterprisesUseCase', {
  useClass: ListEnterprisesUseCase,
});

container.register<EnterpriseController>('EnterpriseController', {
  useClass: EnterpriseController,
});

container.register<CategoryController>('CategoryController', {
  useClass: CategoryController,
});

container.register<CreateCategoryUseCase>('CreateCategoryUseCase', {
  useClass: CreateCategoryUseCase,
});

container.register<ListCategoriesUseCase>('ListCategoriesUseCase', {
  useClass: ListCategoriesUseCase,
});

container.register<GetCategoryByIdUseCase>('GetCategoryByIdUseCase', {
  useClass: GetCategoryByIdUseCase,
});

container.register<UpdateCategoryUseCase>('UpdateCategoryUseCase', {
  useClass: UpdateCategoryUseCase,
});

container.register<CategoryRepository>('CategoryRepository', {
  useClass: CategoryRepository,
});

container.register<BrevoEmailService>('BrevoEmailService', {
  useClass: BrevoEmailService,
});

container.register<LoginUseCase>('LoginUseCase', {
  useClass: LoginUseCase,
});

export default container;
