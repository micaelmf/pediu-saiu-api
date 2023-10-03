// src/adapters/http/controllers/UserController.ts
import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../../application/usecases/user/CreateUserUseCase';
import { inject, injectable } from 'tsyringe';
import { UserRepositoryInterface } from '../../../domain/repositories/UserRepositoryInterface';

@injectable()
export class UserController {
  constructor(
    @inject('CreateUserUseCase') private createUserUseCase: CreateUserUseCase
  ) {}

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body; // Obtenha os dados do usuário do corpo da solicitação
      const newUser = await this.createUserUseCase.execute(user);

      // Chame o caso de uso para criar o usuário.
      const createdUser = await this.createUserUseCase.execute(newUser);

      // Retorne a resposta com o usuário criado.
      res.status(201).json(createdUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  // Implemente outros métodos de controlador aqui.
}
