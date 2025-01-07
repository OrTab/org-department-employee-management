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
    const newEmployee = {} as IEmployee;
    newEmployee.id = crypto.randomUUID();
    newEmployee.companyId = companyId;
    newEmployee.name = employee.name.trim();
    newEmployee.email = employee.email.trim();
    newEmployee.departmentId = employee.departmentId;
    company.employees[newEmployee.id] = newEmployee;
    await CompanyService.updateCompany(company);
    this.rootStore.companyStore.companies[companyId].addEmployee(newEmployee);
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
    const newDepartment = {} as IDepartment;
    newDepartment.id = crypto.randomUUID();
    newDepartment.companyId = companyId;
    newDepartment.name = department.name.trim();
    const newEmployees: Record<string, IEmployee> = {};
    if (shouldAddDummyEmployees) {
      for (let i = 0; i < 10; i++) {
        const employee = generateDummyEmployee(newDepartment.id, companyId);
        company.employees[employee.id] = employee;
        newEmployees[employee.id] = employee;
      }
    }
    company.departments[newDepartment.id] = newDepartment;
    await CompanyService.updateCompany(company);
    const currentCompany = this.rootStore.companyStore.companies[companyId];
    currentCompany.addDepartment(newDepartment);
    if (shouldAddDummyEmployees) {
      currentCompany.addEmployees(Object.values(newEmployees));
    }
  }
}
