import { dummyDepartments } from "../dummyData";
import { DepartmentService } from "../services/DepartmentService";
import type { RootStore } from "../store/RootStore";

export class DepartmentController {
  readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  async loadDepartments() {
    let departments = await DepartmentService.getDepartments();
    if (!departments) {
      departments = dummyDepartments;
      await DepartmentService.saveDepartments(departments);
    }
    this.rootStore.departmentStore.setDepartments(departments);
  }
}
