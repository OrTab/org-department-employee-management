import { ICompany, IDepartment, IEmployee } from "./types";

const companyNames = [
  "Microsoft",
  "Apple",
  "Amazon",
  "Google",
  "Meta",
  "Netflix",
  "Tesla",
  "Intel",
  "Adobe",
  "Salesforce",
  "Oracle",
  "IBM",
  "Cisco",
  "Dell",
];

const departmentNames = [
  "Human Resources",
  "Finance",
  "Marketing",
  "Sales",
  "Engineering",
  "Research & Development",
  "Customer Support",
  "Operations",
  "Legal",
  "Information Technology",
  "Product Management",
  "Quality Assurance",
  "Business Development",
  "Public Relations",
  "Supply Chain",
];

const firstNames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Emma",
  "Olivia",
  "Ava",
  "Isabella",
  "Sophia",
  "Charlotte",
  "Mia",
  "Amelia",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
];

function generateDummyCompany(usedCompanyNames: Set<string>): ICompany {
  let companyName;
  while (true) {
    companyName = companyNames[Math.floor(Math.random() * companyNames.length)];
    if (!usedCompanyNames.has(companyName)) {
      break;
    }
  }
  usedCompanyNames.add(companyName);

  return {
    id: crypto.randomUUID(),
    name: companyName,
    address: `${Math.floor(Math.random() * 1000)} ${
      ["Main", "Oak", "Maple", "Cedar", "Park"][Math.floor(Math.random() * 5)]
    } Street`,
    phone: `(${Math.floor(Math.random() * 900) + 100}) ${
      Math.floor(Math.random() * 900) + 100
    }-${Math.floor(Math.random() * 9000) + 1000}`,
    email: `contact@${companyName.toLowerCase().replace(/\s+/g, "")}.com`,
    departments: {},
    employees: {},
  };
}

function generateDummyDepartment(
  companyId: string,
  usedDepartments: Set<string>
): IDepartment {
  let departmentName;
  while (true) {
    departmentName =
      departmentNames[Math.floor(Math.random() * departmentNames.length)];
    if (!usedDepartments.has(departmentName)) {
      break;
    }
  }

  usedDepartments.add(departmentName);

  return {
    id: crypto.randomUUID(),
    name: departmentName,
    companyId: companyId,
  };
}

function generateDummyEmployee(
  departmentId: string,
  companyId: string
): IEmployee {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const fullName = `${firstName} ${lastName}`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`;

  return {
    id: crypto.randomUUID(),
    name: fullName,
    email: email,
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
  const usedCompanyNames = new Set<string>();

  // Ensure we don't try to generate more companies than available names
  numCompanies = Math.min(numCompanies, companyNames.length);

  for (let i = 0; i < numCompanies; i++) {
    const company = generateDummyCompany(usedCompanyNames);
    companies[company.id] = company;

    const usedDepartments = new Set<string>();
    const numDepartments = Math.min(
      Math.floor(Math.random() * 5) + 5,
      departmentNames.length
    );

    for (let j = 0; j < numDepartments; j++) {
      const department = generateDummyDepartment(company.id, usedDepartments);
      company.departments[department.id] = department;
      const numEmployees = Math.floor(Math.random() * 10) + 3;

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
