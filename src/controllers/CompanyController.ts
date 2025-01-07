import { dummyCompanies } from "../dummyData";
import { CompanyService } from "../services/CompanyService";
import type { Employee } from "../store/entities/Employee";
import type { RootStore } from "../store/RootStore";
import { ICompany, IEmployee } from "../types";

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
    const company = await this.getCompany(companyId);
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
    const company = await this.getCompany(companyId);
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
        // update data
        delete company.employees[employee.id];
        // update store
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
        // update data
        company.employees[employee.id].departmentId = targetDepartmentId;
        this.rootStore.companyStore.companies[
          companyId
        ].moveEmployeeToDepartment(employee.id, targetDepartmentId);
      }
    );
  }

  async deleteEmployee(employeeId: string, companyId: string) {
    const company = await this.getCompany(companyId);
    delete company.employees[employeeId];
    await CompanyService.updateCompany(company);
    this.rootStore.companyStore.companies[companyId].deleteEmployee(employeeId);
  }

  async addEmployee(employee: IEmployee, companyId: string) {
    const company = await this.getCompany(companyId);
    employee.id = crypto.randomUUID();
    employee.companyId = companyId;
    company.employees[employee.id] = employee;
    await CompanyService.updateCompany(company);
    this.rootStore.companyStore.companies[companyId].addEmployee(employee);
  }

  private async getCompany(companyId: string) {
    const company = await CompanyService.getCompany(companyId);
    if (!company) {
      throw new Error("Company not found");
    }
    return company;
  }
}
