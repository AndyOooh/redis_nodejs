import axios from 'axios';
import { Request, Response } from 'express';
import { getOrSetCache } from '../../utils';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async (_req: Request, res: Response) => {
  try {
    const key = 'posts';
    const data = await getOrSetCache(key, () =>
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
    );
    return res.json(data);
  } catch (error) {
    throw error;
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const key = `post:${postId}`;
    const data = await getOrSetCache(key, () =>
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    );
    return res.json(data);
  } catch (error) {
    throw error;
  }
};

export const getPhotos = async (_req: Request, res: Response) => {
  try {
    const { data }: { data: Post[] } = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    return res.json({ message: 'Hello from /photos 😍', data });
  } catch (error) {
    throw error;
  }
};
