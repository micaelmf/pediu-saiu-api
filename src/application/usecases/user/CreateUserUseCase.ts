// src/application/usecases/user/createUserUseCase.ts
import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../../adapters/database/mysql/repositories/UserRepository';
import { User } from '../../../domain/entities/User';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository
  ) {}

  async execute(user: User): Promise<User> {
    // Implemente a lógica para criar um usuário aqui.
    const createdUser = await this.userRepository.create(user);
    return createdUser;
  }
}
