import {Pool} from 'pg';
import {QuerySettings} from './types';

class PgClient {
  private readonly _client: Pool;

  constructor(settings: any) {
    this._client = new Pool({
      host: settings.host,
      user: settings.user,
      password: settings.password,
      database: settings.database,
      max: 10,
      ssl: settings.ssl
    });
  }

  public async runInQuery<T = void>({query, values}: QuerySettings): Promise<T[]> {
    try {
      const connection = await this._client.connect();
      const result = await this._client.query(query, values);
      connection.release();
      return result.rows as T[];
    } catch (error) {
      throw new Error(error);
    }
  }

  public async runInTransaction<T = void>(callBack): Promise<T[]> {
    try {
      const connection = await this._client.connect();
      await this._client.query('BEGIN');

      const result = await callBack(this._client);

      await this._client.query('COMMIT');
      connection.release();
      return result as T[];
    } catch (error) {
      await this._client.query('ROLLBACK');
    }
  }
}

export {
  PgClient
};