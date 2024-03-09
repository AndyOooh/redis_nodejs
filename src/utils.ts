import { redisClient } from './config/redis';

export const getOrSetCache = async (key: string, cb: () => Promise<any>) => {
  try {
    const dataCached = await redisClient.get(key);
    if (dataCached) return JSON.parse(dataCached);
    const freshData = await cb();
    await redisClient.set(key, JSON.stringify(freshData));
    return freshData;
  } catch (error) {
    throw error;
  }
};
