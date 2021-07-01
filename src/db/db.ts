import { PgClient } from '../lib/PgClient';
import { RedisClient } from '../lib/RedisClient';

const pgClient = new PgClient({
  host: process.env.POSTGRES_HOST || 'database',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

const redisClient = new RedisClient({});

export {
  pgClient,
  redisClient
};
