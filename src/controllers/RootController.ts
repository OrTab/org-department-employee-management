import type { RootStore } from "../store/RootStore";
import { CompanyController } from "./CompanyController";
import { DepartmentController } from "./DepartmentController";
import { EmployeeController } from "./EmployeeController";

export class RootController {
  readonly companyController: CompanyController;
  readonly departmentController: DepartmentController;
  readonly employeeController: EmployeeController;

  constructor(rootStore: RootStore) {
    this.companyController = new CompanyController(rootStore);
    this.departmentController = new DepartmentController(rootStore);
    this.employeeController = new EmployeeController(rootStore);
  }

  loadAppData() {
    this.companyController.loadCompanies();
    this.departmentController.loadDepartments();
    this.employeeController.loadEmployees();
  }
}
