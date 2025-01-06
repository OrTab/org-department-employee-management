import { action, computed, makeObservable, observable } from "mobx";
import { BaseEntityStore } from "./BaseEntityStore";
import { Company } from "./entities/Company";
import { RootStore } from "./RootStore";

export class CompanyStore extends BaseEntityStore<Company, ICompany> {
  @observable selectedCompanyId: string | null = null;

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

  @computed
  get companies() {
    return this.entities;
  }

  get selectedCompany() {
    return this.companies[this.selectedCompanyId!];
  }
}
