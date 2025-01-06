import { ApiService } from "./ApiService";

export class EmployeeService {
  static storageKey = "employees";

  static async getEmployees() {
    return ApiService.get<Record<string, IEmployee>>(this.storageKey);
  }

  static async saveEmployees(employees: Record<string, IEmployee>) {
    return ApiService.post(this.storageKey, employees);
  }
}
