import { ApiService } from "./ApiService";

export class DepartmentService {
  static storageKey = "departments";

  static async getDepartments() {
    return ApiService.get<Record<string, IDepartment>>(this.storageKey);
  }

  static async saveDepartments(departments: Record<string, IDepartment>) {
    return ApiService.post(this.storageKey, departments);
  }
}
