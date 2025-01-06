import { computed } from "mobx";
import type { RootStore } from "../RootStore";

export class Company {
  private readonly rootStore: RootStore;
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;

  constructor(
    rootStore: RootStore,
    { id, name, address, phone, email }: ICompany
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.rootStore = rootStore;
  }

  @computed
  get departments() {
    return this.rootStore.departmentStore.selectedCompanyDepartments;
  }

  @computed
  get employees() {
    return this.rootStore.employeeStore.selectedCompanyEmployees;
  }
}
