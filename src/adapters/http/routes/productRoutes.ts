// src/adapters/http/routes/productRoutes.ts
import { Router } from 'express';
import { container } from 'tsyringe';
import { ProductController } from '../controllers/ProductController';
import { verifyToken } from '../middleware/authMiddleware';

import '../../../containers'; // Importe o arquivo onde você configura o contêiner
import { CustomRequest } from '../../../types';

const router = Router();

// Resolva as dependências do contêiner
const productController = container.resolve(ProductController);

router.post('/', verifyToken, async (req, res) => {
  await productController.createProduct(req, res);
});

// router.get('/', verifyToken, async (req: CustomRequest, res) => {
//   await productController.listProducts(req, res);
// });

// router.get('/search', verifyToken, async (req: CustomRequest, res) => {
//   await productController.searchProducts(req, res);
// });

// router.get('/:id', verifyToken, async (req: CustomRequest, res) => {
//   await productController.getProductById(req, res);
// });

// router.put('/:id', verifyToken, async (req: CustomRequest, res) => {
//   await productController.updateProduct(req, res);
// });

// router.patch('/:id', verifyToken, async (req: CustomRequest, res) => {
//   await productController.updateVisibility(req, res);
// });

export default router;
