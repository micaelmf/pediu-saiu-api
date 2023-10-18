// src/application/usecases/user/editUserUseCase.ts
import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../../../adapters/database/mysql/repositories/UserRepository';
import { User } from '../../../domain/entities/User';
import { UserNotFoundException } from '../../../adapters/exceptions/UserNotFoundException';

@injectable()
export class EditUserUseCase {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository
  ) {}

  async execute(
    uuid: string,
    updatedUserData: Partial<User>
  ): Promise<User | null> {
    const user = await this.userRepository.findByUuid(uuid);

    if (!user) {
      throw new UserNotFoundException(
        'Usuário não encontrado para atualização.'
      );
    }

    const userUpdated = await this.userRepository.update({
      ...user,
      ...updatedUserData,
    });

    if (!userUpdated) {
      throw new UserNotFoundException('Nenhum registro atualizado.');
    }

    return userUpdated;
  }
}
