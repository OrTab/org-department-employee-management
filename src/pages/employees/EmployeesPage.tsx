import { observer } from 'mobx-react-lite';
import { Button, Table, TableColumnType } from 'antd';
import styled from 'styled-components';
import { useEmployeesPage } from './hooks/useEmployeesPage';
import { useWindowSize } from '../../hooks/useWindowSize';
import { AddEmployeeModal } from './components/AddEmployeeModal';
import { TableHeader } from './hooks/TableHeader';
import { useMemo } from 'react';

export const EmployeesPage = observer(() => {
  const {
    employees,
    setSearchText,
    isAddModalVisible,
    setIsAddModalVisible,
    handleAddEmployee,
    handleCloseModal,
    handleDeleteClick,
    departments,
    departmentsById,
    form,
    selectedDepartments,
    setSelectedDepartments,
  } = useEmployeesPage();

  const { isMediumUp } = useWindowSize();

  const columns: TableColumnType<any>[] = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Department',
        dataIndex: 'departmentId',
        key: 'department',
        render: (departmentId: string) =>
          departmentsById[departmentId]?.name || 'Unknown',
      },
      {
        title: 'Actions',
        key: 'actions',
        render: (_: string, record: { key: string }) => (
          <Button
            type="primary"
            danger
            onClick={() => handleDeleteClick(record.key)}
          >
            Delete
          </Button>
        ),
      },
    ],
    [departmentsById, handleDeleteClick]
  );

  const employeesData = useMemo(
    () =>
      employees.map((employee) => ({
        key: employee.id,
        name: employee.name,
        email: employee.email,
        departmentId: employee.departmentId,
      })),
    [employees]
  );

  return (
    <PageContainer>
      <TableHeader
        setSearchText={setSearchText}
        selectedDepartments={selectedDepartments}
        setSelectedDepartments={setSelectedDepartments}
        departments={departments}
        setIsAddModalVisible={setIsAddModalVisible}
      />

      <Table
        scroll={{ x: 'max-content' }}
        dataSource={employeesData}
        columns={columns}
        rowKey="key"
        pagination={isMediumUp ? { size: 'default', pageSize: 9 } : false}
      />

      <AddEmployeeModal
        isAddModalVisible={isAddModalVisible}
        handleAddEmployee={handleAddEmployee}
        handleCloseModal={handleCloseModal}
        form={form}
        departments={departments}
      />
    </PageContainer>
  );
});

////// STYLES //////

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
