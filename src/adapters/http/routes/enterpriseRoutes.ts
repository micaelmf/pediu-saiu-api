// src/adapters/http/routes/enterpriseRoutes.ts
import { Router } from 'express';
import { container } from 'tsyringe';
import { EnterpriseController } from '../controllers/EnterpriseController';
import { verifyToken } from "../middleware/authMiddleware";

const router = Router();

// Certifique-se de que o contêiner seja importado e configurado antes de usar as dependências
import '../../../containers'; // Importe o arquivo onde você configura o contêiner
import { CustomRequest } from '../../../types';

// Resolva as dependências do contêiner
const enterpriseController = container.resolve(EnterpriseController);

router.post('/', async (req, res) => {
  await enterpriseController.createEnterprise(req, res);
});

router.get('/', verifyToken, async (req:CustomRequest, res) => {
  await enterpriseController.listEnterprises(req, res);
});

// Outras rotas, como GET para listar empresas, GET para buscar por ID, etc.

export default router;
