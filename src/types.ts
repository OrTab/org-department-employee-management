export interface ICompany {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  departments: Record<string, IDepartment>;
  employees: Record<string, IEmployee>;
}

export interface IDepartment {
  id: string;
  name: string;
  companyId: string;
}

export interface IEmployee {
  id: string;
  name: string;
  email: string;
  departmentId: string;
  companyId: string;
}

export type EmployeeInput = Omit<IEmployee, "id" | "companyId">;

export type DepartmentInput = Omit<IDepartment, "id" | "companyId">;
