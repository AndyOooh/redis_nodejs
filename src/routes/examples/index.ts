import express, { Request, Response } from 'express';

const withBodyHandler = (req: Request, res: Response) => {
    const { body } = req;
    console.log('🚀  body:', body);
    return res.json({ message: 'ok', body });
  };
  
  const withQueryHandler = (req: Request, res: Response) => {
    const { query } = req;
    console.log('🚀  query:', query);
    return res.json({ message: 'ok', query });
  };