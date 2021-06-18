import { notImplemented } from '@hapi/boom';
import { pgClient } from '../db';
import { Model } from '../lib/Model';

interface LessonTable {
  id?: number;
  name: string;
  content: string;
  game_type: 'dialog' | 'platform' | 'scroll';
  tree_position: string;
}

class LessonModel extends Model<LessonTable> {
  constructor() {
    super('lesson');
  }

  async create(fields: LessonTable): Promise<void> {
    const query = this.query((qb) => qb.insert(fields));

    await pgClient.runInQuery({query});
  }

  async readAll(): Promise<LessonTable[]> {
    const query = this.query((qb) => qb.select());

    return await pgClient.runInQuery<LessonTable>({query});
  }

  delete(id: string): Promise<string> {
    throw notImplemented();
  }

  async read(key, value): Promise<LessonTable | null> {
    const query = this.query((qb) => qb.select().where({[key]: value}));

    const result = await pgClient.runInQuery<LessonTable>({query});

    return Array.isArray(result) ? result[0] : null;
  }

  async readById(value: string): Promise<LessonTable> {
    return await this.read('id', value)
  }

  update(fields: LessonTable): Promise<void> {
    throw notImplemented();
  }
}

export {
  LessonModel
};