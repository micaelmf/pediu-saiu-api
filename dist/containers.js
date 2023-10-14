"use strict";
// src/containers.ts
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const UserRepository_1 = require("./adapters/database/mysql/repositories/UserRepository");
const CreateUserUseCase_1 = require("./application/usecases/user/CreateUserUseCase");
const UserController_1 = require("./adapters/http/controllers/UserController");
const EnterpriseRepository_1 = require("./adapters/database/mysql/repositories/EnterpriseRepository");
const CreateEnterpriseUseCase_1 = require("./application/usecases/enterprise/CreateEnterpriseUseCase");
const EnterpriseController_1 = require("./adapters/http/controllers/EnterpriseController");
tsyringe_1.container.register('UserRepository', {
    useClass: UserRepository_1.UserRepository,
});
tsyringe_1.container.register('CreateUserUseCase', {
    useClass: CreateUserUseCase_1.CreateUserUseCase,
});
tsyringe_1.container.register('UserController', {
    useClass: UserController_1.UserController,
});
tsyringe_1.container.register('EnterpriseRepository', {
    useClass: EnterpriseRepository_1.EnterpriseRepository,
});
tsyringe_1.container.register('CreateEnterpriseUseCase', {
    useClass: CreateEnterpriseUseCase_1.CreateEnterpriseUseCase,
});
tsyringe_1.container.register('EnterpriseController', {
    useClass: EnterpriseController_1.EnterpriseController,
});
exports.default = tsyringe_1.container;
