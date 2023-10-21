import { Request, Response, NextFunction } from 'express';
import AuthService from '../../../domain/services/AuthService'; // Importe o serviço de autenticação
import { CustomRequestHandler, CustomRequest } from '../../../types';

export const verifyToken: CustomRequestHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: 'Token not provided' });
    return;
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const authService = new AuthService(process.env.JWT_SECRET || '');
    const decoded = await authService.verifyToken(token);

    if (!decoded) {
      res.status(401).json({ error: 'Invalid token' });
    } else {
      req.user = decoded;
      next();
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
