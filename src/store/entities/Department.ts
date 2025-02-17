import { computed } from 'mobx';
import type { RootStore } from '../RootStore';
import { IDepartment } from '../../types';

export class Department {
  private readonly rootStore: RootStore;
  id: string;
  name: string;
  companyId: string;

  constructor(rootStore: RootStore, { id, name, companyId }: IDepartment) {
    this.rootStore = rootStore;
    this.id = id;
    this.name = name;
    this.companyId = companyId;
  }

  @computed
  get employees() {
    const { selectedCompany } = this.rootStore.companyStore;
    // efficient access to get employees by department id
    return selectedCompany.employeesByDepartmentId[this.id] || [];
  }
}
