import { PgClient } from '../lib/PgClient';
import { RedisClient } from '../lib/RedisClient';

const pgClient = new PgClient({
  host: 'database',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  string: process.env.POSTGRES_CONNECTION_STRGING || 'postgres://db_user:db_user@database:5432/words'
});

const redisClient = new RedisClient({});

export {
  pgClient,
  redisClient
};
