import { action, computed } from "mobx";
import { Employee } from "./entities/Employee";
import type { RootStore } from "./RootStore";
import { BaseEntityStore } from "./BaseEntityStore";

export class EmployeeStore extends BaseEntityStore<Employee, IEmployee> {
  constructor(rootStore: RootStore) {
    super(rootStore);
  }

  @action
  setEmployees(employees: Record<string, IEmployee>) {
    this.setEntities({
      entitiesData: employees,
      Entity: Employee,
    });
  }

  @computed
  get employees() {
    return this.entities;
  }

  @computed
  get selectedCompanyEmployees() {
    const { selectedCompanyId } = this.rootStore.companyStore;
    return Object.values(this.entities).filter(
      (employee) => employee.companyId === selectedCompanyId
    );
  }
}
