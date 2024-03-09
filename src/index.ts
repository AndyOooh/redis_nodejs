import express, { Request, Response } from 'express';
import { rootHandler, helloHandler } from './handlers';

const app = express();
const port = process.env.PORT || '8000';

app.use(express.json());

const withBodyHandler = (req: Request, res: Response) => {
  const { body } = req;
  console.log('🚀  body:', body);
  return res.json({ message: 'ok' });
};

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);
app.get('/with-body', withBodyHandler);

app.listen(port, (err?: Error) => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});
