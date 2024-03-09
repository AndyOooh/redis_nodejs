import express, { Request, Response } from 'express';

export const exampleRouter = express.Router();

const withBodyHandler = (req: Request, res: Response) => {
  const { body } = req;
  return res.json({ message: 'ok', body });
};

const withQueryHandler = (req: Request, res: Response) => {
  const { query } = req;
  return res.json({ message: 'ok', query });
};

exampleRouter.route('/with-body').get(withBodyHandler);
exampleRouter.route('/with-query').get(withQueryHandler);

export const exampleRoutes = {
  withBodyHandler,
  withQueryHandler,
};
