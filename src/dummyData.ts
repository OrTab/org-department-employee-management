function generateDummyCompany(): ICompany {
  return {
    id: Math.random().toString(36).substring(2, 11),
    name: `Company ${Math.floor(Math.random() * 100)}`,
    address: `Address ${Math.floor(Math.random() * 100)}`,
    phone: `Phone ${Math.floor(Math.random() * 100)}`,
    email: `email${Math.floor(Math.random() * 100)}@example.com`,
    departments: {},
    employees: {},
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
}: {
  numCompanies?: number;
}): {
  companies: { [id: string]: ICompany };
} {
  const companies: { [id: string]: ICompany } = {};

  for (let i = 0; i < numCompanies; i++) {
    const company = generateDummyCompany();
    companies[company.id] = company;

    const numDepartments = Math.floor(Math.random() * 5) + 12;

    for (let j = 0; j < numDepartments; j++) {
      const department = generateDummyDepartment(company.id);
      company.departments[department.id] = department;
      const numEmployees = Math.floor(Math.random() * 20);

      for (let k = 0; k < numEmployees; k++) {
        const employee = generateDummyEmployee(department.id, company.id);
        company.employees[employee.id] = employee;
      }
    }
  }

  return { companies };
}

const { companies } = generateDummyData({
  numCompanies: 5,
});

export const dummyCompanies = companies;
