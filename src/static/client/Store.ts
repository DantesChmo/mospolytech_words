class Store {
  private static _isEmpty = true;

  private static readonly _store: Record<string, any> = {};

  public static getData<T>(key: string): T | null {
    return Store._store[key] ?? null;
  }

  public static putData(key: string, value: any) {
    Store._isEmpty = true;
    Store._store[key] = value;
  }
}

export {
  Store
};