import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../hooks/useAppContext";
import { Table, Button, Modal, Select, message, TableColumnsType } from "antd";
import { useState, useCallback } from "react";
import styled from "styled-components";

export const DepartmentsPage = observer(() => {
  const {
    rootStore: {
      companyStore: { selectedCompany, selectedCompanyId },
    },
    rootController: { companyController },
  } = useAppContext();
  const { departments } = selectedCompany;

  const [selectedDepartmentId, setSelectedDepartmentId] = useState<
    string | null
  >(null);
  const [actionForEmployees, setActionForEmployees] = useState<
    "delete" | "move" | null
  >(null);
  const [targetDepartment, setTargetDepartment] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDelete = useCallback(
    async (departmentId: string) => {
      try {
        setLoading(true);
        await companyController.deleteDepartment(
          departmentId,
          selectedCompanyId
        );
        message.success("Department deleted successfully!");
      } catch {
        message.error("Failed to delete department!");
      } finally {
        setLoading(false);
      }
    },
    [companyController, selectedCompanyId]
  );

  const handleClose = useCallback(() => {
    setSelectedDepartmentId(null);
    setActionForEmployees(null);
    setTargetDepartment(null);
  }, []);

  const showDeleteConfirmation = useCallback(
    (departmentId: string) => {
      Modal.confirm({
        title: "Are you sure you want to delete this department?",
        content: `Department: ${selectedCompany.departmentsById[departmentId].name}`,
        onOk: () => handleDelete(departmentId),
        onCancel: handleClose,
      });
    },
    [handleDelete, handleClose, selectedCompany.departmentsById]
  );

  const handleDeleteEmployees = useCallback(async () => {
    if (!selectedDepartmentId) return;
    try {
      setLoading(true);
      await companyController.deleteDepartmentEmployees(
        selectedDepartmentId,
        selectedCompanyId
      );
      message.success("Employees deleted successfully!");
      showDeleteConfirmation(selectedDepartmentId);
    } catch {
      message.error("Failed to delete employees!");
    } finally {
      setLoading(false);
    }
  }, [
    companyController,
    selectedCompanyId,
    selectedDepartmentId,
    showDeleteConfirmation,
  ]);

  const handleMoveEmployees = useCallback(async () => {
    if (!selectedDepartmentId || !targetDepartment) return;
    try {
      setLoading(true);
      await companyController.moveEmployeesToDepartment(
        selectedDepartmentId,
        targetDepartment,
        selectedCompanyId
      );
      message.success("Employees moved successfully!");
      showDeleteConfirmation(selectedDepartmentId);
    } catch {
      message.error("Failed to move employees!");
    } finally {
      setLoading(false);
    }
  }, [
    companyController,
    selectedCompanyId,
    selectedDepartmentId,
    showDeleteConfirmation,
    targetDepartment,
  ]);

  const onConfirmAction = () => {
    if (actionForEmployees === "delete") {
      handleDeleteEmployees();
    } else if (actionForEmployees === "move" && targetDepartment) {
      handleMoveEmployees();
    }
  };

  const handleDeleteClick = (departmentId: string) => {
    const department = selectedCompany.departmentsById[departmentId];
    if (department.employees.length > 0) {
      setSelectedDepartmentId(departmentId);
    } else {
      showDeleteConfirmation(departmentId);
    }
  };

  const dataSource = departments.map((department) => ({
    key: department.id,
    name: department.name,
    employees: department.employees.length,
  }));

  const columns: TableColumnsType<any> = [
    {
      title: "Department",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Employees Number",
      dataIndex: "employees",
      key: "employees",
    },
    {
      title: "Actions",
      key: "delete",
      render: (_: string, { key }: { key: string }) => (
        <Button type='primary' danger onClick={() => handleDeleteClick(key)}>
          Delete
        </Button>
      ),
    },
  ];

  const selectedDepartment = selectedDepartmentId
    ? selectedCompany.departmentsById[selectedDepartmentId]
    : undefined;

  return (
    <>
      <Table
        scroll={{ x: "max-content" }}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
      <Modal
        title='Manage Employees Before Deleting Department'
        open={!!selectedDepartment}
        onOk={onConfirmAction}
        onCancel={handleClose}
        confirmLoading={loading}
      >
        <p>This department has employees. What would you like to do?</p>
        <FullWidthSelect
          placeholder='Select action for employees'
          value={actionForEmployees}
          onChange={(value) =>
            setActionForEmployees(value as "delete" | "move")
          }
        >
          <Select.Option value='delete'>Delete all employees</Select.Option>
          <Select.Option value='move'>
            Move employees to another department
          </Select.Option>
        </FullWidthSelect>

        {actionForEmployees === "move" && (
          <FullWidthSelect
            placeholder='Select target department'
            value={targetDepartment}
            onChange={(value) => setTargetDepartment(value as string)}
            options={departments
              .filter((department) => department.id !== selectedDepartmentId)
              .map((department) => ({
                value: department.id,
                label: department.name,
              }))}
          />
        )}
      </Modal>
    </>
  );
});

//// STYLES ////

const FullWidthSelect = styled(Select)`
  && {
    width: 100%;
  }
`;
