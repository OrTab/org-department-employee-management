import { makeObservable, observable } from "mobx";
import type { RootStore } from "../RootStore";

export class Employee {
  private readonly rootStore: RootStore;
  id: string;
  name: string;
  email: string;
  phone: string;
  departmentId: string;
  companyId: string;

  constructor(
    rootStore: RootStore,
    { id, name, email, phone, departmentId, companyId }: IEmployee
  ) {
    this.rootStore = rootStore;
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.departmentId = departmentId;
    this.companyId = companyId;
    makeObservable(this, {
      departmentId: observable,
    });
  }
}
