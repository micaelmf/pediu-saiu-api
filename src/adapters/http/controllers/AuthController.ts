// src/adapters/http/controllers/UserController.ts
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { BrevoEmailService } from '../../../domain/services/BrevoEmailService';
import { LoginUseCase } from '../../../application/usecases/auth/LoginUseCase';

@injectable()
export class AuthController {
  constructor(
    @inject('BrevoEmailService') private emailService: BrevoEmailService,
    @inject('LoginUseCase') private loginUseCase: LoginUseCase
  ) {}

  public async login(req: Request, res: Response): Promise<void> {
    /**
     * O entepriseId deve ser enviado pelo frontend. Ou seja, quando a página de login
     * for carregada os dados da empresa também devem carregar e quando clicar no botão
     * de logar o enterpriseId deve ser enviado junto com email e o password
     */
    const { email, password, enterpriseId } = req.body;

    try {
      const token = await this.loginUseCase.execute(
        email,
        password,
        enterpriseId
      );
      res
        .cookie('jwtToken', token, {
          httpOnly: true,
          // secure: true, // para produção
          maxAge: 60000 * 60 * 12// 12h
        })
        .status(200)
        .json({ message: "Login realizado com sucesso!", token: token});
    } catch (error) {
      //TODO: Disparar e-mail para usuário, informando que ouve uma tentativa de acesso que falhou
      //TODO: Suspender o acesso do usuário após 6 tentativas, durante 12h.
      //TODO: Enviar e-mail para o usuário com detalhes sobre a tentiva de login e pedindo para entrar em contato com o suporte, caso suspeite de um ataque,

      res.status(401).json({
        error: 'Authentication failed',
        message:
          'Desculpe, não foi possível fazer login com as informações fornecidas. Por favor, verifique seus detalhes de login para tentar novamente ou crie uma nova conta.',
      });
    }
  }
}
