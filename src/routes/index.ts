import express from 'express';

import exampleRoutes from '.';
// import postsRoutes from './posts.routes.js';
// import usersRoutes from './users/users.routes.js';

const router = express.Router();

router.use('/', authRoutes);
router.use('/examples', exampleRoutes);
router.use('/users', usersRoutes);

export default router;