import { dummyCompanies, generateDummyEmployee } from "../dummyData";
import { CompanyService } from "../services/CompanyService";
import type { Employee } from "../store/entities/Employee";
import type { RootStore } from "../store/RootStore";
import { ICompany, IDepartment, IEmployee } from "../types";

export class CompanyController {
  readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  async loadCompanies() {
    let companies = await CompanyService.getCompanies(500);
    if (!companies) {
      companies = dummyCompanies;
      await CompanyService.saveCompanies(companies);
    }
    this.rootStore.companyStore.setCompanies(companies);
  }

  async deleteDepartment({
    departmentId,
    companyId,
  }: {
    departmentId: string;
    companyId: string;
  }) {
    const company = await this.getCompany({ companyId });
    delete company.departments[departmentId];
    await CompanyService.updateCompany(company);
    this.rootStore.companyStore.companies[companyId].deleteDepartment(
      departmentId
    );
  }

  private async processEmployeesInDepartment({
    departmentId,
    companyId,
    processEmployee,
  }: {
    departmentId: string;
    companyId: string;
    processEmployee: (employee: Employee, company: ICompany) => void;
  }) {
    const { companies } = this.rootStore.companyStore;
    const company = await this.getCompany({ companyId });
    const employees =
      companies[companyId].employeesByDepartmentId[departmentId];
    for (const employee of employees) {
      processEmployee(employee, company);
    }
    return CompanyService.updateCompany(company);
  }

  async deleteDepartmentEmployees({
    departmentId,
    companyId,
  }: {
    departmentId: string;
    companyId: string;
  }) {
    return this.processEmployeesInDepartment({
      departmentId,
      companyId,
      processEmployee: (employee, company) => {
        delete company.employees[employee.id];
        this.rootStore.companyStore.companies[companyId].deleteEmployee(
          employee.id
        );
      },
    });
  }

  async moveEmployeesToDepartment({
    departmentId,
    targetDepartmentId,
    companyId,
  }: {
    departmentId: string;
    targetDepartmentId: string;
    companyId: string;
  }) {
    return this.processEmployeesInDepartment({
      departmentId,
      companyId,
      processEmployee: (employee, company) => {
        company.employees[employee.id].departmentId = targetDepartmentId;
        this.rootStore.companyStore.companies[
          companyId
        ].moveEmployeeToDepartment(employee.id, targetDepartmentId);
      },
    });
  }

  async deleteEmployee({
    employeeId,
    companyId,
  }: {
    employeeId: string;
    companyId: string;
  }) {
    const company = await this.getCompany({ companyId });
    delete company.employees[employeeId];
    await CompanyService.updateCompany(company);
    this.rootStore.companyStore.companies[companyId].deleteEmployee(employeeId);
  }

  async addEmployee({
    employee,
    companyId,
  }: {
    employee: { name: string; email: string; departmentId: string };
    companyId: string;
  }) {
    const company = await this.getCompany({ companyId });
    const newEmployee = this.createEmployee({ employee, companyId });

    company.employees[newEmployee.id] = newEmployee;
    await CompanyService.updateCompany(company);
    this.rootStore.companyStore.companies[companyId].addEmployee(newEmployee);
  }

  private createEmployee({
    employee: { departmentId, name, email },
    companyId,
  }: {
    employee: { name: string; email: string; departmentId: string };
    companyId: string;
  }): IEmployee {
    return {
      id: crypto.randomUUID(),
      companyId,
      name: name.trim(),
      email: email.trim(),
      departmentId: departmentId,
    };
  }

  private async getCompany({ companyId }: { companyId: string }) {
    const company = await CompanyService.getCompany(companyId);
    if (!company) {
      throw new Error("Company not found");
    }
    return company;
  }

  async addDepartment({
    department,
    companyId,
    shouldAddDummyEmployees = false,
  }: {
    department: { name: string };
    companyId: string;
    shouldAddDummyEmployees?: boolean;
  }) {
    const company = await this.getCompany({ companyId });

    const newDepartment = this.createDepartment({ department, companyId });

    const newEmployees = shouldAddDummyEmployees
      ? this.generateDepartmentEmployees({
          departmentId: newDepartment.id,
          companyId,
        })
      : {};

    company.departments[newDepartment.id] = newDepartment;
    Object.assign(company.employees, newEmployees);

    await CompanyService.updateCompany(company);

    const currentCompanyModel =
      this.rootStore.companyStore.companies[companyId];
    currentCompanyModel.addDepartment(newDepartment);
    if (shouldAddDummyEmployees) {
      currentCompanyModel.addEmployees(Object.values(newEmployees));
    }
  }

  private createDepartment({
    department,
    companyId,
  }: {
    department: { name: string };
    companyId: string;
  }): IDepartment {
    return {
      id: crypto.randomUUID(),
      companyId,
      name: department.name.trim(),
    };
  }

  private generateDepartmentEmployees({
    departmentId,
    companyId,
    numberOfEmployees = 10,
  }: {
    departmentId: string;
    companyId: string;
    numberOfEmployees?: number;
  }): Record<string, IEmployee> {
    const employees: Record<string, IEmployee> = {};
    for (let i = 0; i < numberOfEmployees; i++) {
      const employee = generateDummyEmployee(departmentId, companyId);
      employees[employee.id] = employee;
    }
    return employees;
  }
}
