import { Request, Response, Router } from 'express';
import userController from '../controllers/userController'; // Importe o controlador de usuário

const router = Router();

// Rota para criar um novo usuário.
router.post('/', async (req: Request, res: Response) => {
  try {
    // Chame a função do controlador para criar um novo usuário.
    const newUser = await userController.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Rota para buscar todos os usuários.
router.get('/', async (req: Request, res: Response) => {
  try {
    // Chame a função do controlador para buscar todos os usuários.
    // const users = await userController.getAllUsers();
    const users = ['1','2', '3'];
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

export default router;
