import { dummyEmployees } from "../dummyData";
import { EmployeeService } from "../services/EmployeeService";
import type { RootStore } from "../store/RootStore";

export class EmployeeController {
  readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  async loadEmployees() {
    let employees = await EmployeeService.getEmployees();
    if (!employees) {
      employees = dummyEmployees;
      await EmployeeService.saveEmployees(employees);
    }
    this.rootStore.employeeStore.setEmployees(employees);
  }
}
