// src/domain/services/AuthService.ts
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';
import { UserRepository } from '../../adapters/database/mysql/repositories/UserRepository';
const bcrypt = require('bcrypt');

class AuthService {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  public async authenticate(
    email: string,
    password: string,
    enterpiseId: number
  ): Promise<User | null> {
    let userRepository = new UserRepository();

    const user = await userRepository.findByEmailAndEnterpriseId(
      email,
      enterpiseId
    );

    if (!user) {
      return null;
    }

    const isPasswordValid = await this.comparePasswords(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  private async comparePasswords(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  public generateToken(user: User): string {
    // TODO: lembrar de colocar a data do vencimento da empresa relacionada ao usuário e criar uma tabela no banco para conter somente as informações de cobrança
    const payload = {
      user: { uuid: user.uuid, email: user.email, role: user.role },
    };

    return jwt.sign({ payload }, this.secretKey, { expiresIn: '1h' });
  }

  public async verifyToken(token: string): Promise<any | null> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secretKey, (err: any, decoded: any) => {
        if (err) {
          resolve(null);
        } else {
          resolve(decoded);
        }
      });
    });
  }
}

export default AuthService;
