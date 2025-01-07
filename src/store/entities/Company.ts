import {
  action,
  computed,
  makeObservable,
  observable,
  remove,
  runInAction,
} from "mobx";
import type { RootStore } from "../RootStore";
import { Employee } from "./Employee";
import { Department } from "./Department";
import { ICompany, IDepartment, IEmployee } from "../../types";

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
    makeObservable(this);
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
      acc[id] = new Employee(data);
      return acc;
    }, {});
  }

  @action
  deleteDepartment(departmentId: string) {
    remove(this._departments, departmentId);
  }

  @action
  deleteEmployee(employeeId: string) {
    remove(this._employees, employeeId);
  }

  @action
  moveEmployeeToDepartment(employeeId: string, departmentId: string) {
    this._employees[employeeId].departmentId = departmentId;
  }

  @action
  addEmployee(employee: IEmployee) {
    this._employees[employee.id] = new Employee(employee);
  }

  @action
  addDepartment(department: IDepartment) {
    this._departments[department.id] = new Department(
      this.rootStore,
      department
    );
  }

  @action
  addEmployees(employees: IEmployee[]) {
    runInAction(() => {
      employees.forEach((employee) => {
        this.addEmployee(employee);
      });
    });
  }

  @computed
  get employees() {
    return Object.values(this._employees);
  }

  @computed
  get employeesById() {
    return this._employees;
  }

  @computed
  get departments() {
    return Object.values(this._departments);
  }

  @computed
  get departmentsById() {
    return this._departments;
  }

  @computed
  get employeesByDepartmentId() {
    // this is cached by mobx so it will be updated when the employees change
    return this.employees.reduce<Record<string, Employee[]>>(
      (acc, employee) => {
        acc[employee.departmentId] ||= [];
        acc[employee.departmentId].push(employee);
        return acc;
      },
      {}
    );
  }
}
