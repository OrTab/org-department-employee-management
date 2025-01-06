import { action, computed, makeObservable, observable } from "mobx";
import { BaseEntityStore } from "./BaseEntityStore";
import { Company } from "./entities/Company";
import { RootStore } from "./RootStore";

export class CompanyStore extends BaseEntityStore<Company, ICompany> {
  @observable selectedCompanyId: string = "";

  constructor(rootStore: RootStore) {
    super(rootStore);
    makeObservable(this);
  }

  @action
  setCompanies(companies: Record<string, ICompany>) {
    this.setEntities({
      entitiesData: companies,
      Entity: Company,
    });
    this.setSelectedCompanyId(Object.keys(this.companies)[0]);
  }

  @action.bound
  setSelectedCompanyId(companyId: string) {
    this.selectedCompanyId = companyId;
  }

  @action.bound
  updateCompany(company: ICompany) {
    this.companies[company.id] = new Company(this.rootStore, company);
  }

  @computed
  get companies() {
    return this.entities;
  }

  @computed
  get selectedCompany() {
    return this.companies[this.selectedCompanyId!];
  }
}
