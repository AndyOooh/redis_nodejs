import { Request, Response } from 'express';

export const withBodyHandler = (req: Request, res: Response) => {
  const { body } = req;
  return res.json({ message: 'ok', body });
};

export const withQueryHandler = (req: Request, res: Response) => {
  const { query } = req;
  return res.json({ message: 'ok', query });
};
