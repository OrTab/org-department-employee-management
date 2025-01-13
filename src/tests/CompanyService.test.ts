import { CompanyService } from '../services/CompanyService';
import { ApiService } from '../services/ApiService';
import { ICompany } from '../types';

jest.mock('../services/ApiService');

describe('CompanyService', () => {
  const mockCompany: ICompany = {
    id: '123',
    name: 'Test Company',
    address: '123 Test St',
    phone: '123-456-7890',
    email: 'test@test.com',
    departments: {},
    employees: {},
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getCompanies', () => {
    it('should return null if no company ids exist', async () => {
      jest.spyOn(ApiService, 'get').mockResolvedValueOnce(undefined);

      const result = await CompanyService.getCompanies();
      expect(result).toBeNull();
    });

    it('should return companies when they exist', async () => {
      jest
        .spyOn(ApiService, 'get')
        .mockResolvedValueOnce(['123'])
        .mockResolvedValueOnce(mockCompany);

      const result = await CompanyService.getCompanies();
      expect(result).toEqual({ '123': mockCompany });
    });
  });

  describe('updateCompany', () => {
    it('should update company successfully', async () => {
      jest.spyOn(ApiService, 'put').mockResolvedValueOnce(mockCompany);

      const result = await CompanyService.updateCompany(mockCompany);
      expect(result).toEqual(mockCompany);
      expect(ApiService.put).toHaveBeenCalledWith(
        `company_${mockCompany.id}`,
        mockCompany
      );
    });
  });
});
