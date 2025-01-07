import { makeObservable, observable } from "mobx";

export class Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  departmentId: string;
  companyId: string;

  constructor({ id, name, email, phone, departmentId, companyId }: IEmployee) {
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
