function generateDummyCompany(): ICompany {
  return {
    id: Math.random().toString(36).substring(2, 11),
    name: `Company ${Math.floor(Math.random() * 100)}`,
    address: `Address ${Math.floor(Math.random() * 100)}`,
    phone: `Phone ${Math.floor(Math.random() * 100)}`,
    email: `email${Math.floor(Math.random() * 100)}@example.com`,
  };
}

function generateDummyDepartment(companyId: string): IDepartment {
  return {
    id: Math.random().toString(36).substring(2, 11),
    name: `Department ${Math.floor(Math.random() * 100)}`,
    companyId: companyId,
  };
}

function generateDummyEmployee(
  departmentId: string,
  companyId: string
): IEmployee {
  return {
    id: Math.random().toString(36).substring(2, 11),
    name: `Employee ${Math.floor(Math.random() * 100)}`,
    email: `email${Math.floor(Math.random() * 100)}@example.com`,
    phone: `Phone ${Math.floor(Math.random() * 100)}`,
    departmentId: departmentId,
    companyId: companyId,
  };
}

export function generateDummyData({
  numCompanies = 3,
  numDepartmentsPerCompany = 8,
  numEmployeesPerDepartment = 10,
}: {
  numCompanies?: number;
  numDepartmentsPerCompany?: number;
  numEmployeesPerDepartment?: number;
}): {
  companies: { [id: string]: ICompany };
  departments: { [id: string]: IDepartment };
  employees: { [id: string]: IEmployee };
} {
  const companies: { [id: string]: ICompany } = {};
  const departments: { [id: string]: IDepartment } = {};
  const employees: { [id: string]: IEmployee } = {};

  for (let i = 0; i < numCompanies; i++) {
    const company = generateDummyCompany();
    companies[company.id] = company;

    for (let j = 0; j < numDepartmentsPerCompany; j++) {
      const department = generateDummyDepartment(company.id);
      departments[department.id] = department;

      for (let k = 0; k < numEmployeesPerDepartment; k++) {
        const employee = generateDummyEmployee(department.id, company.id);
        employees[employee.id] = employee;
      }
    }
  }

  return { companies, departments, employees };
}

const { companies, departments, employees } = generateDummyData({
  numCompanies: 3,
  numDepartmentsPerCompany: 5,
  numEmployeesPerDepartment: 5,
});

export const dummyCompanies = companies;
export const dummyDepartments = departments;
export const dummyEmployees = employees;
