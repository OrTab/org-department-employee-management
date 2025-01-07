import { StorageService } from "./StorageService";

export class ApiService {
  static async get<T>(key: string, defaultValue?: T): Promise<T | undefined> {
    return StorageService.getStorage<T>({ key, defaultValue });
  }

  static async put<T>(key: string, value: T): Promise<T> {
    StorageService.setStorage<T>({ key, value });
    return value;
  }

  static async post<T>(key: string, value: T): Promise<T> {
    StorageService.setStorage<T>({ key, value });
    return value;
  }

  static async delete(key: string): Promise<void> {
    return StorageService.setStorage({ key, value: undefined });
  }
}
