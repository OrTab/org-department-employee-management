import { action, computed, observable } from "mobx";
import type { RootStore } from "../RootStore";
import { Employee } from "./Employee";
import { Department } from "./Department";

export class Company {
  private readonly rootStore: RootStore;
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  @observable _employees: Record<string, Employee> = {};
  @observable _departments: Record<string, Department> = {};

  constructor(
    rootStore: RootStore,
    { id, name, address, phone, email, employees, departments }: ICompany
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.rootStore = rootStore;
    this.setEmployees(employees);
    this.setDepartments(departments);
  }

  @action
  setDepartments(departmentsData: Record<string, IDepartment>) {
    this._departments = Object.entries(departmentsData).reduce<
      Record<string, Department>
    >((acc, [id, data]) => {
      acc[id] = new Department(this.rootStore, data);
      return acc;
    }, {});
  }

  @action
  setEmployees(employeesData: Record<string, IEmployee>) {
    this._employees = Object.entries(employeesData).reduce<
      Record<string, Employee>
    >((acc, [id, data]) => {
      acc[id] = new Employee(this.rootStore, data);
      return acc;
    }, {});
  }

  @computed
  get employees() {
    return Object.values(this._employees);
  }

  @computed
  get departments() {
    return Object.values(this._departments);
  }
}
