import { dummyCompanies } from "../dummyData";
import { CompanyService } from "../services/CompanyService";
import type { Employee } from "../store/entities/Employee";
import type { RootStore } from "../store/RootStore";

export class CompanyController {
  readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  async loadCompanies() {
    let companies = await CompanyService.getCompanies();
    if (!companies) {
      companies = dummyCompanies;
      await CompanyService.saveCompanies(companies);
    }
    this.rootStore.companyStore.setCompanies(companies);
  }

  async deleteDepartment(departmentId: string, companyId: string) {
    const company = await CompanyService.getCompany(companyId);
    if (!company) {
      return;
    }
    delete company.departments[departmentId];
    await CompanyService.updateCompany(company);
    this.rootStore.companyStore.companies[companyId].deleteDepartment(
      departmentId
    );
  }

  private async processEmployeesInDepartment(
    departmentId: string,
    companyId: string,
    processEmployee: (employee: Employee, company: ICompany) => void
  ) {
    const { companies } = this.rootStore.companyStore;
    const company = await CompanyService.getCompany(companyId);
    if (!company) {
      return;
    }
    const employees =
      companies[companyId].employeesByDepartmentId[departmentId];
    for (const employee of employees) {
      processEmployee(employee, company);
    }
    return CompanyService.updateCompany(company);
  }

  async deleteDepartmentEmployees(departmentId: string, companyId: string) {
    return this.processEmployeesInDepartment(
      departmentId,
      companyId,
      (employee, company) => {
        delete company.employees[employee.id];
        this.rootStore.companyStore.companies[companyId].deleteEmployee(
          employee.id
        );
      }
    );
  }

  async moveEmployeesToDepartment(
    departmentId: string,
    targetDepartmentId: string,
    companyId: string
  ) {
    return this.processEmployeesInDepartment(
      departmentId,
      companyId,
      (employee, company) => {
        company.employees[employee.id].departmentId = targetDepartmentId;
        this.rootStore.companyStore.companies[
          companyId
        ].moveEmployeeToDepartment(employee.id, targetDepartmentId);
      }
    );
  }

  async deleteEmployee(employeeId: string, companyId: string) {
    const company = await CompanyService.getCompany(companyId);
    if (!company) {
      return;
    }
    delete company.employees[employeeId];
    await CompanyService.updateCompany(company);
    this.rootStore.companyStore.companies[companyId].deleteEmployee(employeeId);
  }

  async addEmployee(employee: IEmployee, companyId: string) {
    const company = await CompanyService.getCompany(companyId);
    if (!company) {
      return;
    }
    employee.id = crypto.randomUUID();
    employee.companyId = companyId;
    company.employees[employee.id] = employee;
    await CompanyService.updateCompany(company);
    this.rootStore.companyStore.companies[companyId].addEmployee(employee);
  }
}
