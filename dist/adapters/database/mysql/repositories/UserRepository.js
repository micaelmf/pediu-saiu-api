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
exports.UserRepository = void 0;
// import { PrismaClient } from '@prisma/client';
const client_1 = require("../../../../../prisma/generated/client");
class UserRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield this.prisma.user.create({
                    data: {
                        // Mapeie os campos do objeto User para o formato do banco de dados aqui
                        uuid: user.uuid,
                        email: user.email,
                        nickname: user.nickname,
                        role: user.role,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        enterpriseId: user.enterpriseId,
                    },
                });
                return createdUser;
            }
            catch (error) {
                console.log(error);
                throw new Error('Erro ao criar usuário no banco de dados.');
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.prisma.user.findUnique({
                    where: {
                        id,
                    },
                });
                return user;
            }
            catch (error) {
                throw new Error(`Erro ao buscar usuário pelo ID: ${id}`);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.prisma.user.findMany();
                return users;
            }
            catch (error) {
                throw new Error('Erro ao buscar todos os usuários.');
            }
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield this.prisma.user.update({
                    where: {
                        id
                    },
                    data: {
                        // Atualize os campos necessários aqui
                        email: user.email,
                        nickname: user.nickname,
                        role: user.role,
                        firstName: user.firstName,
                        lastName: user.lastName,
                    },
                });
                return updatedUser;
            }
            catch (error) {
                throw new Error('Erro ao atualizar usuário no banco de dados.');
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.user.delete({
                    where: {
                        id,
                    },
                });
            }
            catch (error) {
                throw new Error(`Erro ao excluir usuário pelo ID: ${id}`);
            }
        });
    }
}
exports.UserRepository = UserRepository;
