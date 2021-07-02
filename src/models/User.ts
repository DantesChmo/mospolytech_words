import { Model } from '../lib/Model';
import { pgClient, redisClient } from '../db';

interface UserTable {
  id: string;
  password: string;
  name: string;
  progress: number;
  is_admin: boolean;
}

class UserModel extends Model<UserTable> {
  constructor() {
    super('user');
  }

  create(fields: UserTable): Promise<void> {
    return Promise.resolve(undefined);
  }

  delete(id: string): Promise<string> {
    return Promise.resolve("");
  }

  read(key: keyof UserTable, value: UserTable[keyof UserTable]): Promise<UserTable | null> {
    return Promise.resolve(undefined);
  }

  async readByUserData(reqData: {name: string, password: string}): Promise<UserTable | null> {
    const {name, password} = reqData;
    const query = this.query((qb) => qb.select().where({name}).andWhere({password}));

    const result = await pgClient.runInQuery<UserTable>({query});

    return Array.isArray(result) ? result[0] : null;
  }

  readAll(): Promise<UserTable[]> {
    return Promise.resolve([]);
  }

  update(fields: UserTable): Promise<void> {
    return Promise.resolve(undefined);
  }
}

export {
  UserModel
};