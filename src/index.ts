import express from 'express';
import { apiRouter } from './routes';

const app = express();
const port = process.env.PORT || '8000';

app.use(express.json());

app.use('/', apiRouter);

app.listen(port, (err?: Error) => {
  if (err) return console.error(err);
  console.log(`Server is listening on ${port}`);
});
