import { Model } from '../lib/Model';
import { pgClient } from '../db';

interface ILeaders {
  id?: string;
  user_id: string;
  progress: string;
}

class Leaders extends Model<ILeaders> {
  constructor() {
    super('leader');
  }

  async create(fields: ILeaders): Promise<void> {
    const query = this.query((qb) => qb.insert(fields))

    await pgClient.runInQuery({query});
  }

  delete(id: string): Promise<string | null> {
    return Promise.resolve(undefined);
  }

  async read(key: keyof ILeaders, value: ILeaders[keyof ILeaders]): Promise<ILeaders | null> {
    const query = this.query((qb) => qb.select().where({[key]: value}));

    const result = await pgClient.runInQuery<ILeaders>({query});
    return Array.isArray(result) ? result[0] : null;
  }

  async readByUserId(userId: string): Promise<ILeaders | null> {
    return await this.read('user_id', userId);
  }

  async readAll(): Promise<ILeaders[] | null> {
    const query = this.query((qb) => qb.select());

    return await pgClient.runInQuery<ILeaders>({query});
  }

  async update(fields: ILeaders): Promise<void> {
    const query = this.query((qb) => qb.update(fields));
    await pgClient.runInQuery({query});
  }
}

export {
  Leaders
};
