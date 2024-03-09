import express from 'express';
import { exampleRouter } from './example';
import { placeholderRouter } from './placeholder';

export const apiRouter = express.Router();

const rootHandler = (_req: express.Request, res: express.Response) => {
  return res.send('Hello from root 🤓');
};

apiRouter.use('/example', exampleRouter);
apiRouter.use('/placeholder', placeholderRouter);
apiRouter.use('/', rootHandler);
