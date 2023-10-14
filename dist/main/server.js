"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configurar o contêiner de injeção de dependência
require("../containers"); // Importe o arquivo onde você configura o contêiner
// Importe as rotas após configurar o contêiner
const userRoutes_1 = __importDefault(require("../adapters/http/routes/userRoutes"));
const enterpriseRoutes_1 = __importDefault(require("../adapters/http/routes/enterpriseRoutes"));
// Carregue as variáveis de ambiente a partir do arquivo .env
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
// Use JSON como o formato de resposta padrão
app.use(body_parser_1.default.json());
// ... Configurações e middlewares globais ...
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocorreu um erro no servidor' });
});
// Use as rotas importadas
app.use('/users', userRoutes_1.default);
app.use('/enterprises', enterpriseRoutes_1.default);
// app.use('/products', productRoutes);
app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});
