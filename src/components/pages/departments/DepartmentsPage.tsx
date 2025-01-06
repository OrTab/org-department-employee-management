import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../hooks/useAppContext";

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
      {departments.map((department) => (
        <button
          key={department.id}
          onClick={() => department.setDepartmentName("test")}
        >
          {department.name}
        </button>
      ))}
    </div>
  );
});
