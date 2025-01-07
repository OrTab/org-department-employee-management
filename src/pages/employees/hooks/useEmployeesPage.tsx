import { message, Modal, Form } from "antd";
import { Employee } from "../../../store/entities/Employee";
import { debounce } from "../../../utils";
import { useCallback, useMemo, useState } from "react";
import { useAppContext } from "../../../hooks/useAppContext";

export const useEmployeesPage = () => {
  const {
    rootController: { companyController },
    rootStore: {
      companyStore: {
        selectedCompanyId,
        selectedCompany: {
          employees,
          departmentsById,
          employeesById,
          departments,
          employeesByDepartmentId,
        },
      },
    },
  } = useAppContext();

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [form] = Form.useForm();

  const handleDeleteEmployee = useCallback(
    async (employeeId: string) => {
      try {
        await companyController.deleteEmployee({
          companyId: selectedCompanyId,
          employeeId,
        });
        message.success("Employee deleted successfully");
      } catch {
        message.error("Failed to delete employee");
      }
    },
    [companyController, selectedCompanyId]
  );

  const handleDeleteClick = useCallback(
    (employeeId: string) => {
      const employee = employeesById[employeeId];
      Modal.confirm({
        title: `Are you sure you want to delete this employee?`,
        content: `Employee Name: ${employee.name}`,
        onOk: () => handleDeleteEmployee(employeeId),
      });
    },
    [employeesById, handleDeleteEmployee]
  );

  const handleCloseModal = useCallback(() => {
    setIsAddModalVisible(false);
    form.resetFields();
  }, [form]);

  const handleAddEmployee = useCallback(async () => {
    try {
      const values = await form.validateFields();
      await companyController.addEmployee({
        employee: {
          name: values.name,
          email: values.email,
          departmentId: values.departmentId,
        },
        companyId: selectedCompanyId,
      });
      message.success("Employee added successfully");
      handleCloseModal();
    } catch {
      message.error("Failed to add employee");
    }
  }, [companyController, form, handleCloseModal, selectedCompanyId]);

  const _employees = useMemo(
    () =>
      selectedDepartments.length
        ? selectedDepartments.reduce<Employee[]>((acc, departmentId) => {
            acc.push(...(employeesByDepartmentId[departmentId] || []));
            return acc;
          }, [])
        : employees,
    [employees, employeesByDepartmentId, selectedDepartments]
  );

  const filteredEmployees = useMemo(
    () =>
      _employees.filter((employee) => {
        const _searchText = searchText.toLowerCase().trim();
        return (
          employee.name.toLowerCase().includes(_searchText) ||
          employee.email.toLowerCase().includes(_searchText)
        );
      }),
    [_employees, searchText]
  );

  const debouncedSearch = useMemo(() => debounce(setSearchText, 300), []);

  return {
    employees: filteredEmployees,
    setSearchText: debouncedSearch,
    isAddModalVisible,
    setIsAddModalVisible,
    handleAddEmployee,
    handleCloseModal,
    handleDeleteClick,
    form,
    departmentsById,
    departments,
    employeesByDepartmentId,
    selectedDepartments,
    setSelectedDepartments,
  };
};
