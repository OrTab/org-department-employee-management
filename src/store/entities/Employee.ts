import { makeObservable, observable } from 'mobx';
import { IEmployee } from '../../types';

export class Employee {
  id: string;
  name: string;
  email: string;
  companyId: string;
  @observable departmentId: string;

  constructor({ id, name, email, departmentId, companyId }: IEmployee) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.departmentId = departmentId;
    this.companyId = companyId;
    makeObservable(this);
  }
}
