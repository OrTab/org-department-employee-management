import { StorageService } from '../services/StorageService';

describe('StorageService', () => {
  const mockData = { test: 'data' };
  const key = 'testKey';

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  describe('getStorage', () => {
    it('should get item from localStorage', () => {
      localStorage.setItem(key, JSON.stringify(mockData));

      const result = StorageService.getStorage({ key });
      expect(result).toEqual(mockData);
    });

    it("should return default value when item doesn't exist", () => {
      const defaultValue = { default: true };

      const result = StorageService.getStorage({
        key,
        defaultValue,
      });
      expect(result).toEqual(defaultValue);
    });

    it('should handle invalid JSON', () => {
      localStorage.setItem(key, 'invalid json');
      const defaultValue = { default: true };

      const result = StorageService.getStorage({
        key,
        defaultValue,
      });
      expect(result).toEqual(defaultValue);
    });
  });

  describe('setStorage', () => {
    it('should set item in localStorage', () => {
      StorageService.setStorage({ key, value: mockData });

      const storedItem = localStorage.getItem(key);
      expect(JSON.parse(storedItem!)).toEqual(mockData);
    });

    it('should handle sessionStorage', () => {
      StorageService.setStorage({
        storageType: 'sessionStorage',
        key,
        value: mockData,
      });

      const storedItem = sessionStorage.getItem(key);
      expect(JSON.parse(storedItem!)).toEqual(mockData);
    });
  });
});
