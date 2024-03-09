import { redisClient } from './config/redis';

export const getOrSetCache = async (key: string, cb: () => Promise<any>) => {
  try {
    const dataCached = await redisClient.get(key);
    if (dataCached) {
      console.log(`🩷 Cach HIT for ${key}`);
      return JSON.parse(dataCached);
    }
    console.log(`🚫 Cach MISS for ${key}`);
    const freshData = await cb();
    await redisClient.set(key, JSON.stringify(freshData));
    return freshData;
  } catch (error) {
    throw error;
  }
};
