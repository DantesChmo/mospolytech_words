abstract class Model<T> {
  public abstract create<T>(fields: T): Promise<void>;

  public abstract read<T>(): Promise<T>;

  public abstract update<T>(fields: T): Promise<T>;

  public abstract delete(id: string): Promise<string>;
}

export {
  Model
};
