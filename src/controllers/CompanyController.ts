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

  async deleteDepartment(departmentId: string) {
    const { selectedCompanyId, selectedCompany } = this.rootStore.companyStore;
    const company = await CompanyService.getCompany(selectedCompanyId);
    if (!company) {
      return;
    }
    delete company.departments[departmentId];
    await CompanyService.updateCompany(company);
    selectedCompany.deleteDepartment(departmentId);
  }

  private async processEmployeesInDepartment(
    departmentId: string,
    processEmployee: (employee: Employee, company: ICompany) => void
  ) {
    const { selectedCompanyId, selectedCompany } = this.rootStore.companyStore;
    const company = await CompanyService.getCompany(selectedCompanyId);
    if (!company) {
      return;
    }
    const employees = selectedCompany.employeesByDepartmentId[departmentId];
    for (const employee of employees) {
      processEmployee(employee, company);
    }
    return CompanyService.updateCompany(company);
  }

  async deleteDepartmentEmployees(departmentId: string) {
    return this.processEmployeesInDepartment(
      departmentId,
      (employee, company) => {
        delete company.employees[employee.id];
        this.rootStore.companyStore.selectedCompany.deleteEmployee(employee.id);
      }
    );
  }

  async moveEmployeesToDepartment(
    departmentId: string,
    targetDepartmentId: string
  ) {
    return this.processEmployeesInDepartment(
      departmentId,
      (employee, company) => {
        company.employees[employee.id].departmentId = targetDepartmentId;
        this.rootStore.companyStore.selectedCompany.moveEmployeeToDepartment(
          employee.id,
          targetDepartmentId
        );
      }
    );
  }
}
