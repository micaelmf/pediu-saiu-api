"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseRepository = void 0;
// src/adapters/database/mysql/repositories/EnterpriseRepository.ts
const client_1 = require("../../../../../prisma/generated/client");
class EnterpriseRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(enterprise) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdEnterprise = yield this.prisma.enterprise.create({
                    data: {
                        uuid: enterprise.uuid,
                        name: enterprise.name,
                        responsiblePerson: enterprise.responsiblePerson,
                        phoneNumber: enterprise.phoneNumber,
                        email: enterprise.email,
                        description: enterprise.description,
                        status: enterprise.status,
                    },
                });
                return createdEnterprise;
            }
            catch (error) {
                throw new Error('Erro ao criar empresa no banco de dados.');
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const enterprise = yield this.prisma.enterprise.findUnique({
                    where: {
                        id,
                    },
                });
                return enterprise;
            }
            catch (error) {
                throw new Error(`Erro ao buscar empresa pelo ID: ${id}`);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const enterprises = yield this.prisma.enterprise.findMany();
                return enterprises;
            }
            catch (error) {
                throw new Error('Erro ao buscar todas as empresas.');
            }
        });
    }
    update(id, enterprise) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedEnterprise = yield this.prisma.enterprise.update({
                    where: {
                        id,
                    },
                    data: {
                        name: enterprise.name,
                        responsiblePerson: enterprise.responsiblePerson,
                        phoneNumber: enterprise.phoneNumber,
                        email: enterprise.email,
                        description: enterprise.description,
                        status: enterprise.status,
                    },
                });
                return updatedEnterprise;
            }
            catch (error) {
                throw new Error('Erro ao atualizar empresa no banco de dados.');
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.enterprise.delete({
                    where: {
                        id,
                    },
                });
            }
            catch (error) {
                throw new Error(`Erro ao excluir empresa pelo ID: ${id}`);
            }
        });
    }
}
exports.EnterpriseRepository = EnterpriseRepository;
