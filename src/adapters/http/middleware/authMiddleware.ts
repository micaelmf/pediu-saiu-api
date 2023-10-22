// src/adapters/http/middleware/authMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import AuthService from '../../../domain/services/AuthService'; // Importe o serviço de autenticação
import { CustomRequestHandler, CustomRequest } from '../../../types';
const cookie = require('cookie');

export const verifyToken: CustomRequestHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token = '';

  if (req.headers.cookie) {
    token = cookie.parse(req.headers.cookie).jwtToken;
  }

  if (req.headers.authorization) {
    token = req.headers.authorization.replace('Bearer ', '');
  }

  if (!token) {
    res.status(401).json({ error: 'Token not provided' });
    return;
  }

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
