// src/adapters/http/controllers/CategoryController.ts
import { Request, Response } from 'express';
import { CreateCategoryUseCase } from '../../../application/usecases/category/CreateCatetoryUseCase';
import { ListCategoriesUseCase } from '../../../application/usecases/category/ListCategoriesUseCase';
import { GetCategoryByIdUseCase } from '../../../application/usecases/category/GetCategoryByIdUseCase';
import { UpdateCategoryUseCase } from '../../../application/usecases/category/UpdateCategoryUseCase';
import { inject, injectable } from 'tsyringe';
import { Category } from '../../../domain/entities/Category';

@injectable()
export class CategoryController {
  constructor(
    @inject('CreateCategoryUseCase')
    private createCategoryUseCase: CreateCategoryUseCase,
    @inject('ListCategoriesUseCase')
    private listCategoriesUseCase: ListCategoriesUseCase,
    @inject('GetCategoryByIdUseCase')
    private getCategoryByIdUseCase: GetCategoryByIdUseCase,
    @inject('UpdateCategoryUseCase')
    private updateCategoryUseCase: UpdateCategoryUseCase
  ) {}

  async createCategory(req: Request, res: Response): Promise<void> {
    try {
      const categoryData: Category = req.body;
      const createdCategory = await this.createCategoryUseCase.execute(
        categoryData
      );

      res.status(201).json(createdCategory);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar empresa' });
    }
  }

  async listCategories(req: Request, res: Response): Promise<void> {
    try {
      const Categories: Category[] = await this.listCategoriesUseCase.execute();

      res.status(200).json(Categories);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar empresas' });
    }
  }

  async getCategoryById(req: Request, res: Response): Promise<void> {
    try {
      const categoryId: number = parseInt(req.params.id); // Suponha que o ID da categoria seja passado como parâmetro na URL
      const category: Category | null =
        await this.getCategoryByIdUseCase.execute(categoryId);

      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ error: 'Categoria não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar categoria por ID' });
    }
  }

  async updateCategory(req: Request, res: Response): Promise<void> {
    try {
      const categoryId: number = parseInt(req.params.id);
      const updatedData: Category = req.body;
      const updatedCategory = await this.updateCategoryUseCase.execute(
        categoryId,
        updatedData
      );

      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar categoria' });
    }
  }
}
