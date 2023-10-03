// src/adapters/http/routes/userRoutes.ts
import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/UserController';
import { CreateUserUseCase } from '../../../application/usecases/user/CreateUserUseCase';

const router = Router();

// Certifique-se de que o contêiner seja importado e configurado antes de usar as dependências
import '../../../containers'; // Importe o arquivo onde você configura o contêiner

// Resolva as dependências do contêiner
const createUserUseCase = container.resolve(CreateUserUseCase);

router.post('/', async (req, res) => {
  try {
    const user = req.body; // Obtenha os dados do usuário do corpo da solicitação
    const createdUser = await createUserUseCase.execute(user);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Outras rotas, como GET para listar usuários, GET para buscar por ID, etc.

export default router;
