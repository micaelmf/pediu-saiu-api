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
// src/adapters/http/routes/userRoutes.ts
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const CreateUserUseCase_1 = require("../../../application/usecases/user/CreateUserUseCase");
const router = (0, express_1.Router)();
// Certifique-se de que o contêiner seja importado e configurado antes de usar as dependências
require("../../../containers"); // Importe o arquivo onde você configura o contêiner
// Resolva as dependências do contêiner
const createUserUseCase = tsyringe_1.container.resolve(CreateUserUseCase_1.CreateUserUseCase);
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body; // Obtenha os dados do usuário do corpo da solicitação
        const createdUser = yield createUserUseCase.execute(user);
        res.status(201).json(createdUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
}));
// Outras rotas, como GET para listar usuários, GET para buscar por ID, etc.
exports.default = router;
