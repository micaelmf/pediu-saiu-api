import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes'; // Importe as rotas de usuário
// import categoryRoutes from './routes/categoryRoutes'; // Importe as rotas de categoria
// import productRoutes from './routes/productRoutes'; // Importe as rotas de produto

// Carregue as variáveis de ambiente a partir do arquivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Use JSON como o formato de resposta padrão
app.use(bodyParser.json());

// Middleware de tratamento de erros global
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocorreu um erro no servidor' });
  }
);

// Use as rotas importadas
app.use('/users', userRoutes);
// app.use('/categories', categoryRoutes);
// app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
