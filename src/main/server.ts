import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import '../containers';

// Routes
import userRoutes from '../adapters/http/routes/userRoutes';
import authRoutes from '../adapters/http/routes/authRoutes';
import enterpriseRoutes from '../adapters/http/routes/enterpriseRoutes';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Use JSON como o formato de resposta padrão
app.use(bodyParser.json());

// ... Configurações e middlewares globais ...
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocorreu um erro no servidor' });
});

// Use as rotas importadas
app.use('/login', authRoutes);

app.use('/users', userRoutes);

app.use('/enterprises', enterpriseRoutes);
// app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
