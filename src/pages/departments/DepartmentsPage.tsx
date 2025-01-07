import { observer } from "mobx-react-lite";
import { Table, Button, TableColumnsType } from "antd";
import { useDepartmentsPage } from "./hooks/useDepartmentsPage";
import { DepartmentActionModal } from "./components/DepartmentActionModal";
import { AddDepartmentModal } from "./components/AddDepartmentModal";

export const DepartmentsPage = observer(() => {
  const {
    selectedDepartmentId,
    selectedDepartment,
    loading,
    handleDeleteClick,
    onConfirmAction,
    handleClose,
    departments,
    actionForEmployees,
    setActionForEmployees,
    setTargetDepartment,
    targetDepartment,
    isAddModalVisible,
    addNewDepartment,
    handleCloseAddDepartmentModal,
    form,
    handleOpenAddDepartmentModal,
  } = useDepartmentsPage();

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

  return (
    <>
      <Button type='primary' onClick={handleOpenAddDepartmentModal}>
        Add Department
      </Button>
      <Table
        scroll={{ x: "max-content" }}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
      <AddDepartmentModal
        form={form}
        isOpen={isAddModalVisible}
        onAddDepartment={addNewDepartment}
        onCancel={handleCloseAddDepartmentModal}
      />
      <DepartmentActionModal
        isOpen={!!selectedDepartment}
        loading={loading}
        actionForEmployees={actionForEmployees}
        targetDepartment={targetDepartment}
        departments={departments}
        selectedDepartmentId={selectedDepartmentId}
        onActionChange={setActionForEmployees}
        onTargetDepartmentChange={setTargetDepartment}
        onOk={onConfirmAction}
        onCancel={handleClose}
      />
    </>
  );
});
