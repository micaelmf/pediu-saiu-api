// src/adapters/http/controllers/UserController.ts
import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../../application/usecases/user/CreateUserUseCase';
import { EditUserUseCase } from '../../../application/usecases/user/EditUserUseCase'; // Importe o EditUserUseCase
import { inject, injectable } from 'tsyringe';
import { UserNotFoundException } from '../../exceptions/UserNotFoundException';
import { BrevoEmailService } from '../../../domain/services/BrevoEmailService';

@injectable()
export class UserController {
  constructor(
    @inject('CreateUserUseCase') private createUserUseCase: CreateUserUseCase,
    @inject('EditUserUseCase') private editUserUseCase: EditUserUseCase,
    @inject('BrevoEmailService') private emailService: BrevoEmailService
  ) {}

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userData = req.body;
      const createdUser = await this.createUserUseCase.execute(userData);

      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  async editUser(req: Request, res: Response): Promise<void> {
    const uuid = req.params.uuid;
    const updatedUserData = req.body;

    try {
      const editedUser = await this.editUserUseCase.execute(
        uuid,
        updatedUserData
      );

      res.status(200).json(editedUser);
    } catch (error: any) {
      if (error instanceof UserNotFoundException) {
        res.status(404).json({ error: 'Instancia: ' + error.message });
      } else {
        await this.emailService.sendErroEmail(error, {
          userId: req.params.uuid,
          enterpriseId: req.body?.enterpriseId,
          message: error.message,
          to: [{email: "micaelmf2@gmail.com"}]
        });

        res.status(500).json({ error: 'Genérico: ' + error.message });
      }
    }
  }
}
