import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../hooks/useAppContext";
import { Table, Button, Modal, Select, message } from "antd";
import { useState } from "react";

export const DepartmentsPage = observer(() => {
  const {
    rootStore: {
      companyStore: { selectedCompany },
    },
    rootController: { companyController },
  } = useAppContext();
  const { departments } = selectedCompany;
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<
    string | null
  >(null);
  const [actionForEmployees, setActionForEmployees] = useState(null); // 'delete' or 'move'
  const [targetDepartment, setTargetDepartment] = useState(null);

  const handleDelete = async (departmentId: string) => {
    try {
      await companyController.deleteDepartment(departmentId);
      message.success("Department deleted successfully!");
    } catch (error) {
      console.error(error);
      message.error("Failed to delete department!");
    }
  };

  const handleDeleteEmployees = async () => {
    try {
      await companyController.deleteDepartmentEmployees(selectedDepartmentId!);
      message.success("Employees deleted successfully!");
      showDeleteConfirmation(selectedDepartmentId!);
    } catch (error) {
      console.error(error);
      message.error("Failed to delete employees!");
    }
  };

  const handleMoveEmployees = async () => {
    try {
      await companyController.moveEmployeesToDepartment(
        selectedDepartmentId!,
        targetDepartment!
      );
      message.success("Employees moved successfully!");
      showDeleteConfirmation(selectedDepartmentId!);
    } catch (error) {
      console.error(error);
      message.error("Failed to move employees!");
    }
  };

  const onConfirmAction = () => {
    if (actionForEmployees === "delete") {
      handleDeleteEmployees();
    } else if (actionForEmployees === "move" && targetDepartment) {
      handleMoveEmployees();
    }
  };

  const showDeleteConfirmation = (departmentId: string) => {
    Modal.confirm({
      title: `Are you sure you want to delete this department? (${selectedCompany.departmentsById[departmentId].name})`,
      onOk: () => handleDelete(departmentId),
      onCancel: handleClose,
    });
  };

  const handleDeleteClick = (departmentId: string) => {
    const department = selectedCompany.departmentsById[departmentId];
    if (department.employees.length > 0) {
      setSelectedDepartmentId(departmentId);
    } else {
      showDeleteConfirmation(departmentId);
    }
  };

  const handleClose = () => {
    setSelectedDepartmentId(null);
    setActionForEmployees(null);
    setTargetDepartment(null);
  };

  const dataSource = departments.map((department) => ({
    key: department.id,
    name: department.name,
    employees: department.employees.length,
  }));

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
    {
      key: "action",
      render: (_: string, { key }: { key: string }) => (
        <Button type='primary' danger onClick={() => handleDeleteClick(key)}>
          Delete Department
        </Button>
      ),
    },
  ];

  const selectedDepartment = selectedDepartmentId
    ? selectedCompany.departmentsById[selectedDepartmentId]
    : undefined;

  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        title='Manage Employees Before Deleting Department'
        open={!!selectedDepartment}
        onOk={onConfirmAction}
        onCancel={handleClose}
      >
        <p>This department has employees. What would you like to do?</p>
        <Select
          style={{ width: "100%" }}
          placeholder='Select action for employees'
          value={actionForEmployees}
          onChange={(value) => setActionForEmployees(value)}
        >
          <Select.Option value='delete'>Delete all employees</Select.Option>
          <Select.Option value='move'>
            Move employees to another department
          </Select.Option>
        </Select>

        {actionForEmployees === "move" && (
          <Select
            style={{ width: "100%" }}
            placeholder='Select target department'
            value={targetDepartment}
            onChange={(value) => setTargetDepartment(value)}
            options={departments
              .filter((department) => department.id !== selectedDepartmentId)
              .map((department) => ({
                value: department.id,
                text: department.name,
              }))}
          />
        )}
      </Modal>
    </>
  );
});
