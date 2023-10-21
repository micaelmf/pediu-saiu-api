// types.ts
import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  user?: any;
}

type CustomRequestHandler = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => Promise<void>;

export { CustomRequest, CustomRequestHandler };
