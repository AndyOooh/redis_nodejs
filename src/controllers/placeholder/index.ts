import axios from 'axios';
import { Request, Response } from 'express';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async (_req: Request, res: Response) => {
  try {
    const { data }: { data: Post[] } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    return res.json({ message: 'Hello from /with-body 😍', data });
  } catch (error) {
    throw error;
  }
};

// export const withQueryHandler = (req: Request, res: Response) => {
//   const { query } = req;
//   return res.json({ message: 'Hello from /with-query 😁', query });
// };
