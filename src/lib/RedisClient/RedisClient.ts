import {createClient, RedisClient as NativeRedisClient} from 'redis';
import autobind from 'autobind-decorator';

@autobind
class RedisClient {
  private readonly _client: NativeRedisClient;

  constructor(settings: any) {
    this._client = createClient(settings);

    this._client.auth('');
    this._client.on('error', this._errorHandler);
  }

  private _errorHandler(): void {
  }

  public get(key: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this._client.get(key, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  public set(key: string, value: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._client.set(key, value, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

export {
  RedisClient
};