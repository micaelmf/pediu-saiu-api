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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../prisma/generated/client");
const faker_1 = __importDefault(require("faker"));
const prisma = new client_1.PrismaClient();
function createRandomEnterprises(numRecords) {
    return __awaiter(this, void 0, void 0, function* () {
        const enterprises = [];
        for (let i = 0; i < numRecords; i++) {
            const fakeEnterprise = {
                uuid: faker_1.default.random.uuid(),
                name: faker_1.default.company.companyName(),
                responsiblePerson: faker_1.default.name.findName(),
                phoneNumber: faker_1.default.phone.phoneNumber(),
                email: faker_1.default.internet.email(),
                description: faker_1.default.lorem.sentence(),
                status: 'ativo',
            };
            enterprises.push(fakeEnterprise);
        }
        // Insira os registros no banco de dados
        yield prisma.enterprise.createMany({
            data: enterprises,
        });
        console.log(`Inseridos ${numRecords} registros na tabela Enterprise.`);
    });
}
createRandomEnterprises(10); // Insira 10 registros, você pode ajustar o número conforme necessário.
