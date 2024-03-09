import axios from 'axios';
import { Request, Response } from 'express';
import { redisClient } from '../../config/redis';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async (_req: Request, res: Response) => {
  try {
    await redisClient.set('test99', 'This was set in TS');
    const a = 22;
    const { data }: { data: Post[] } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    return res.json({ message: 'Hello from /posts 😍', data });
  } catch (error) {
    throw error;
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const { data }: { data: Post[] } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    return res.json({ message: 'Hello from /posts 😍', data });
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
