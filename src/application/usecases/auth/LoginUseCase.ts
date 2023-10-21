// src/application/usecases/user/editUserUseCase.ts
import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../../adapters/database/mysql/repositories/UserRepository';
import AuthService from '../../../domain/services/AuthService';
import { config } from 'dotenv';

@injectable()
export class LoginUseCase {
  private secretKey: string;

  constructor(
    @inject('UserRepository') private userRepository: UserRepository
  ) {
    config();
    this.secretKey = process.env.JWT_SECRET || '';
  }

  async execute(
    email: string,
    password: string,
    enterpiseId: number
  ): Promise<String | null> {
    const authService = new AuthService(this.secretKey);
    const user = await authService.authenticate(email, password, enterpiseId);

    if (!user) {
      throw new Error();
    }

    return authService.generateToken(user);
  }
}
