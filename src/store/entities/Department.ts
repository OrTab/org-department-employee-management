import { computed, makeObservable, observable } from "mobx";
import type { RootStore } from "../RootStore";

export class Department {
  private readonly rootStore: RootStore;
  id: string;
  @observable name: string;
  companyId: string;

  constructor(rootStore: RootStore, { id, name, companyId }: IDepartment) {
    this.rootStore = rootStore;
    this.id = id;
    this.name = name;
    this.companyId = companyId;
    makeObservable(this);
  }

  @computed
  get employees() {
    const { selectedCompany } = this.rootStore.companyStore;
    return selectedCompany.employees.filter(
      (employee) => employee.departmentId === this.id
    );
  }
}
