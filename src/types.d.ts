interface ICompany {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  departments: Record<string, IDepartment>;
  employees: Record<string, IEmployee>;
}

interface IDepartment {
  id: string;
  name: string;
  companyId: string;
}

interface IEmployee {
  id: string;
  name: string;
  email: string;
  phone: string;
  departmentId: string;
  companyId: string;
}
