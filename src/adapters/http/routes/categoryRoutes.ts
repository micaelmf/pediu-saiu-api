// src/adapters/http/routes/categoryRoutes.ts
import { Router } from 'express';
import { container } from 'tsyringe';
import { CategoryController } from '../controllers/CategoryController';
import { verifyToken } from '../middleware/authMiddleware';

import '../../../containers'; // Importe o arquivo onde você configura o contêiner
import { CustomRequest } from '../../../types';

const router = Router();

// Resolva as dependências do contêiner
const categoryController = container.resolve(CategoryController);

router.post('/', verifyToken, async (req, res) => {
  await categoryController.createCategory(req, res);
});

router.get('/', verifyToken, async (req: CustomRequest, res) => {
  await categoryController.listCategories(req, res);
});

router.get('/:id', verifyToken, async (req: CustomRequest, res) => {
  await categoryController.getCategoryById(req, res);
});

router.put('/:id', verifyToken, async (req: CustomRequest, res) => {
  await categoryController.updateCategory(req, res);
});

router.patch('/:id', verifyToken, async (req: CustomRequest, res) => {
  await categoryController.updateVisibility(req, res);
});

export default router;
