import { ApiService } from "./ApiService";

export class CompanyService {
  static storageKey = "companies";

  static async getCompanies() {
    return ApiService.get<Record<string, ICompany>>(this.storageKey);
  }

  static async saveCompanies(companies: Record<string, ICompany>) {
    return ApiService.post(this.storageKey, companies);
  }
}
