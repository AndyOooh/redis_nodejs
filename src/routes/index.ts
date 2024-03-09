import express from 'express';
import { exampleRouter } from './example';

export const apiRouter = express.Router();

const rootHandler = (_req: express.Request, res: express.Response) => {
  return res.send('Hello from root 🤓');
};

apiRouter.use('/example', exampleRouter);
apiRouter.use('/', rootHandler);
