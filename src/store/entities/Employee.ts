import { makeObservable, observable } from "mobx";

export class Employee {
  id: string;
  name: string;
  email: string;
  departmentId: string;
  companyId: string;

  constructor({ id, name, email, departmentId, companyId }: IEmployee) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.departmentId = departmentId;
    this.companyId = companyId;
    makeObservable(this, {
      departmentId: observable,
    });
  }
}
