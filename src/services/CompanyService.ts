import { ApiService } from "./ApiService";

export class CompanyService {
  static readonly COMPANIES_LIST_KEY = "companiesList";
  static readonly COMPANY_PREFIX = "company_";

  static getCompanyKey(id: string) {
    return `${this.COMPANY_PREFIX}${id}`;
  }

  static async getCompanies(): Promise<Record<string, ICompany> | null> {
    const companyIds = (await this.getCompaniesList()) || [];
    const companies: Record<string, ICompany> = {};
    if (!companyIds.length) {
      return null;
    }
    for (const id of companyIds) {
      const company = await this.getCompany(id);
      if (company) companies[id] = company;
    }

    return companies;
  }

  static async getCompaniesList() {
    return ApiService.get<string[]>(this.COMPANIES_LIST_KEY);
  }

  static async getCompany(id: string) {
    return ApiService.get<ICompany>(this.getCompanyKey(id));
  }

  static async updateCompany(company: ICompany) {
    await ApiService.put(this.getCompanyKey(company.id), company);
    return company;
  }

  static async saveCompanies(companies: Record<string, ICompany>) {
    const companyIds = Object.keys(companies);
    await ApiService.put(this.COMPANIES_LIST_KEY, companyIds);

    await Promise.all(
      Object.values(companies).map((company) => this.updateCompany(company))
    );

    return companies;
  }
}
