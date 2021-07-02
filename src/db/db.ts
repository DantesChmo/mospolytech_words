import { PgClient } from '../lib/PgClient';
import { RedisClient } from '../lib/RedisClient';

const pgClient = new PgClient({
  host: process.env.POSTGRES_HOST === 'localhost' ? 'database' : process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  ssl: Boolean(process.env.POSTGRES_SSL)
});

const redisClient = new RedisClient({});

export {
  pgClient,
  redisClient
};
