import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import '../containers';

// Routes
import userRoutes from '../adapters/http/routes/userRoutes';
import authRoutes from '../adapters/http/routes/authRoutes';
import enterpriseRoutes from '../adapters/http/routes/enterpriseRoutes';
import categoryRoutes from '../adapters/http/routes/categoryRoutes';
import productRoutes from '../adapters/http/routes/productRoutes';

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

// Middleware para permitir CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Ou especifique os domínios permitidos em vez de '*'
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200); // Responde com sucesso para as solicitações OPTIONS (pré-voo)
  } else {
    next();
  }
});

// Use as rotas importadas
app.use('/login', authRoutes);

app.use('/users', userRoutes);

app.use('/enterprises', enterpriseRoutes);

app.use('/categories', categoryRoutes);

app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
