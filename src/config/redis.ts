import { createClient } from 'redis';

// Initialize Redis client with options
const redisOptions = {
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD,
};

export const redisClient = createClient(redisOptions);
redisClient.connect();

// Handle Redis client connection events and errors
redisClient.on('error', err => {
  console.error('Redis Client Connection Error:', err);
});

redisClient.on('connect', () => {
  console.log(`Redis Client Connected on ${redisOptions.host}:${redisOptions.port}`);
});

