import express from 'express';
import { withBodyHandler, withQueryHandler } from '../../controllers/example';

export const exampleRouter = express.Router();

exampleRouter.route('/with-body').get(withBodyHandler);
exampleRouter.route('/with-query').get(withQueryHandler);

export const exampleRoutes = {
  withBodyHandler,
  withQueryHandler,
};
