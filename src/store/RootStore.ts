import { CompanyStore } from "./CompanyStore";
import { DepartmentStore } from "./DepartmentStore";
import { EmployeeStore } from "./EmployeeStore";

export class RootStore {
  companyStore: CompanyStore;
  employeeStore: EmployeeStore;
  departmentStore: DepartmentStore;

  constructor() {
    this.companyStore = new CompanyStore(this);
    this.employeeStore = new EmployeeStore(this);
    this.departmentStore = new DepartmentStore(this);
  }
}
