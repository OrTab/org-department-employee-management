import { action, computed, makeObservable, observable } from "mobx";
import { BaseEntityStore } from "./BaseEntityStore";
import { Department } from "./entities/Department";
import type { RootStore } from "./RootStore";

export class DepartmentStore extends BaseEntityStore<Department, IDepartment> {
  @observable selectedDepartmentId: string | null = null;

  constructor(rootStore: RootStore) {
    super(rootStore);
    makeObservable(this);
  }

  @action
  setDepartments(departments: Record<string, IDepartment>) {
    this.setEntities({
      entitiesData: departments,
      Entity: Department,
    });
  }

  @computed
  get departments() {
    return this.entities;
  }

  @computed
  get selectedCompanyDepartments() {
    const { selectedCompanyId } = this.rootStore.companyStore;
    return Object.values(this.entities).filter(
      (department) => department.companyId === selectedCompanyId
    );
  }

  get selectedDepartment() {
    return this.departments[this.selectedDepartmentId!];
  }
}
