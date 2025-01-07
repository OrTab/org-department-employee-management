import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../hooks/useAppContext";
import { Button, Table } from "antd";

export const EmployeesPage = observer(() => {
  const {
    rootStore: {
      companyStore: {
        selectedCompany: { employees, departmentsById },
      },
    },
  } = useAppContext();

  const handleDeleteClick = (key: string) => {
    console.log({ key });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      render: (_: string, { departmentId }: { departmentId: string }) =>
        departmentsById[departmentId].name,
    },
    {
      key: "delete",
      render: (_: string, { key }: { key: string }) => (
        <Button type='primary' danger onClick={() => handleDeleteClick(key)}>
          Delete Employee
        </Button>
      ),
    },
  ];

  const employeesData = employees.map((employee) => ({
    key: employee.id,
    name: employee.name,
    email: employee.email,
    phone: employee.phone,
    departmentId: employee.departmentId,
  }));

  return <Table dataSource={employeesData} columns={columns} />;
});
