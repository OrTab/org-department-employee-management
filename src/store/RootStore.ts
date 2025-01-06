import { CompanyStore } from "./CompanyStore";

export class RootStore {
  companyStore: CompanyStore;

  constructor() {
    this.companyStore = new CompanyStore(this);
  }
}
