// src/domain/repositories/UserRepositoryInterface.ts
import { User } from '../entities/User';

export interface UserRepositoryInterface {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findByUuid(userUuid: string): Promise<User | null>;
  update(updatedUser: User): Promise<User | null>;
  delete(userUuid: string): Promise<User>;
}
