import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../hooks/useAppContext";
import { Table } from "antd";

const columns = [
  {
    title: "Department",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Employees Number",
    dataIndex: "employees",
    key: "employees",
  },
];

export const DepartmentsPage = observer(() => {
  const {
    rootStore: {
      companyStore: {
        selectedCompany: { departments },
      },
    },
  } = useAppContext();
  return (
    <div>
      <Table columns={columns} />
    </div>
  );
});
