import { knex, Knex } from 'knex';

abstract class Model<T> {
  private readonly _queryBuilder = knex({client: 'pg'})

  private readonly _tableName: string;

  protected constructor(tableName: string) {
    this._tableName = tableName;
  }

  protected query(queryWriter: (queryBuilder: ReturnType<Knex>) => any) {
    return queryWriter(this._queryBuilder(this._tableName)).toString();
  }

  public abstract create(fields: T): Promise<void>;

  public abstract read(key: keyof T, value: T[keyof T]): Promise<T | null>;

  public abstract readAll(): Promise<T[] | null>;

  public abstract update(fields: T): Promise<void>;

  public abstract delete(id: string): Promise<string | null>;
}

export {
  Model
};
