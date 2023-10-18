// src/adapters/http/routes/userRoutes.ts
import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/UserController';

const router = Router();

// Certifique-se de que o contêiner seja importado e configurado antes de usar as dependências
import '../../../containers'; // Importe o arquivo onde você configura o contêiner

// Resolva as dependências do contêiner
const userController = container.resolve(UserController);

router.post('/', async (req, res) => {
  await userController.createUser(req, res);
});

router.put('/:uuid', async (req, res) => {
    const editedUser = await userController.editUser(req, res);
});

export default router;
