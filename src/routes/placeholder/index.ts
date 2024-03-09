import express from 'express';
import { getPhotos, getPost, getPosts } from '../../controllers/placeholder';

export const placeholderRouter = express.Router();

const rootHandler = (_req: express.Request, res: express.Response) => {
  return res.send('Hello from /placeholder 🤓');
};

placeholderRouter.route('/').get(rootHandler);
placeholderRouter.route('/posts').get(getPosts);
placeholderRouter.route('/posts/:id').get(getPost);
placeholderRouter.route('/photos').get(getPhotos);
// placeholderRouter.route('/with-query').get(withQueryHandler);
