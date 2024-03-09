import express from 'express';
import { exampleRouter } from './example';

export const apiRouter = express.Router();

const rootHandler = (_req: express.Request, res: express.Response) => {
  return res.send('API is working 🤓');
};

apiRouter.use('/', rootHandler);
apiRouter.use('/example', exampleRouter);
// apiRouter.use('/users', usersRoutes);
