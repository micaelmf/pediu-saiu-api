// src/domain/repositories/UserRepositoryInterface.ts
import { User } from '../entities/User';

export interface UserRepositoryInterface {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findById(userId: number): Promise<User | null>;
  update(userId: number, updatedUser: User): Promise<User | null>;
  delete(userId: number): Promise<User>;
}
