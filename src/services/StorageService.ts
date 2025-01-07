type StorageType = "localStorage" | "sessionStorage";

class StorageService {
  static getStorage<T>({
    storageType = "localStorage",
    key,
    defaultValue,
  }: {
    storageType?: StorageType;
    key: string;
    defaultValue?: T;
  }): T | undefined {
    try {
      const item = window[storageType].getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  static setStorage<T>({
    storageType = "localStorage",
    key,
    value,
  }: {
    storageType?: StorageType;
    key: string;
    value: T;
  }): void {
    try {
      const stringValue = JSON.stringify(value);
      window[storageType].setItem(key, stringValue);
    } catch {
      return undefined;
    }
  }
}

export { StorageService };
