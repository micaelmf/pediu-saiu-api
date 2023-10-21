// src/routes/authRoutes.ts
import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthController } from '../controllers/AuthController';

const router: Router = Router();
import '../../../containers'; // Importe o arquivo onde você configura o contêiner

// Resolva as dependências do contêiner
const authController = container.resolve(AuthController);

router.post('/', async (req, res) => {
  await authController.login(req, res);
});

export default router;
