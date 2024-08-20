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
import { UpdateCategoryVisibilityUseCase } from './application/usecases/category/UpdateCategoryVisibilityUseCase';
import { SearchCategoriesUseCase } from './application/usecases/category/SearchCategoriesUseCase';
import { ProductController } from './adapters/http/controllers/ProductController';
import { CreateProductUseCase } from './application/usecases/product/CreateProductUseCase';
import { ProductRepository } from './adapters/database/mysql/repositories/ProductRepository';
import { ListProductsUseCase } from './application/usecases/product/ListProductsUseCase';
import { SearchProductsUseCase } from './application/usecases/product/SearchProductsUseCase';


/**
 * User
 */
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

/**
 * Enterprise
 */
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

/**
 * Category
 */
container.register<CategoryController>('CategoryController', {
  useClass: CategoryController,
});

container.register<CreateCategoryUseCase>('CreateCategoryUseCase', {
  useClass: CreateCategoryUseCase,
});

container.register<ListCategoriesUseCase>('ListCategoriesUseCase', {
  useClass: ListCategoriesUseCase,
});

container.register<SearchCategoriesUseCase>('SearchCategoriesUseCase', {
  useClass: SearchCategoriesUseCase,
});

container.register<GetCategoryByIdUseCase>('GetCategoryByIdUseCase', {
  useClass: GetCategoryByIdUseCase,
});

container.register<UpdateCategoryUseCase>('UpdateCategoryUseCase', {
  useClass: UpdateCategoryUseCase,
});

container.register<UpdateCategoryVisibilityUseCase>('UpdateCategoryVisibilityUseCase', {
  useClass: UpdateCategoryVisibilityUseCase,
});

container.register<CategoryRepository>('CategoryRepository', {
  useClass: CategoryRepository,
});

/**
 * Product
 */
container.register<ProductController>('ProductController', {
  useClass: ProductController,
});

container.register<ProductRepository>('ProductRepository', {
  useClass: ProductRepository,
});

container.register<CreateProductUseCase>('CreateProductUseCase', {
  useClass: CreateProductUseCase,
});

container.register<ListProductsUseCase>('ListProductsUseCase', {
  useClass: ListProductsUseCase,
});

container.register<SearchProductsUseCase>('SearchProductsUseCase', {
  useClass: SearchProductsUseCase,
});

// container.register<GetProductByIdUseCase>('GetProductByIdUseCase', {
//   useClass: GetProductByIdUseCase,
// });

// container.register<UpdateProductUseCase>('UpdateProductUseCase', {
//   useClass: UpdateProductUseCase,
// });

// container.register<UpdateProductVisibilityUseCase>('UpdateProductVisibilityUseCase', {
//   useClass: UpdateProductVisibilityUseCase,
// });


/**
 * Others
 */

container.register<BrevoEmailService>('BrevoEmailService', {
  useClass: BrevoEmailService,
});

container.register<LoginUseCase>('LoginUseCase', {
  useClass: LoginUseCase,
});

export default container;
