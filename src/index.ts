import express, { Request, Response } from 'express';
import { rootHandler, helloHandler } from './handlers';
import { apiRouter } from './routes';

const app = express();
const port = process.env.PORT || '8000';

app.use(express.json());



app.use('/', apiRouter);
// app.get('/', rootHandler);
// app.get('/examples', );
// app.get('/hello/:name', helloHandler);
// app.get('/with-body', withBodyHandler);
// app.get('/with-query', withQueryHandler);

app.listen(port, (err?: Error) => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});
