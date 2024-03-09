import { Request, Response } from 'express';

export const withBodyHandler = (req: Request, res: Response) => {
  const { body } = req;
  return res.json({ message: 'Hello from /with-body 😍', body });
};

export const withQueryHandler = (req: Request, res: Response) => {
  const { query } = req;
  return res.json({ message: 'Hello from /with-query 😁', query });
};
