import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../hooks/useAppContext";
import {
  Button,
  Modal,
  Table,
  Form,
  Input,
  Select,
  message,
  TableColumnType,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
import { debounce } from "../../../utils";
import { Employee } from "../../../store/entities/Employee";
import { mediumUp } from "../../../style/breakpoints";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const EmployeesPage = observer(() => {
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
  const { isMediumUp } = useWindowSize();

  const handleDeleteEmployee = async (employeeId: string) => {
    try {
      await companyController.deleteEmployee(employeeId, selectedCompanyId);
      message.success("Employee deleted successfully");
    } catch {
      message.error("Failed to delete employee");
    }
  };

  const handleDeleteClick = (employeeId: string) => {
    const employee = employeesById[employeeId];
    Modal.confirm({
      title: `Are you sure you want to delete this employee?`,
      content: `Employee Name: ${employee.name}`,
      onOk: () => handleDeleteEmployee(employeeId),
    });
  };

  const handleAddEmployee = async () => {
    try {
      const values = await form.validateFields();
      await companyController.addEmployee(values, selectedCompanyId);
      message.success("Employee added successfully");
      handleCloseModal();
    } catch {
      message.error("Failed to add employee");
    }
  };

  const handleCloseModal = () => {
    setIsAddModalVisible(false);
    form.resetFields();
  };

  const columns: TableColumnType<any>[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Department",
      dataIndex: "departmentId",
      key: "department",
      render: (departmentId: string) =>
        departmentsById[departmentId]?.name || "Unknown",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: string, record: { key: string }) => (
        <Button
          type='primary'
          danger
          onClick={() => handleDeleteClick(record.key)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const _employees = selectedDepartments.length
    ? selectedDepartments.reduce<Employee[]>((acc, departmentId) => {
        acc.push(...employeesByDepartmentId[departmentId]);
        return acc;
      }, [])
    : employees;

  const filteredEmployees = _employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchText.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const debouncedSearch = debounce(setSearchText, 300);

  const employeesData = filteredEmployees.map((employee) => ({
    key: employee.id,
    name: employee.name,
    email: employee.email,
    departmentId: employee.departmentId,
  }));

  return (
    <PageContainer>
      <TableHeader>
        <FilterSearchInput
          placeholder='Search employees by name or email'
          onChange={(e) => debouncedSearch(e.target.value)}
        />
        <DepartmentSelect
          placeholder='Filter by department'
          allowClear
          mode='multiple'
          value={selectedDepartments}
          onChange={(value) => setSelectedDepartments(value as string[])}
          filterOption={(input, option) =>
            option?.label.toLowerCase().includes(input.toLowerCase()) ?? false
          }
          options={departments.map((department) => ({
            value: department.id,
            label: department.name,
          }))}
          maxTagCount={2}
        />
        <Button type='primary' onClick={() => setIsAddModalVisible(true)}>
          Add Employee
        </Button>
      </TableHeader>

      <Table
        scroll={{ x: "max-content" }}
        dataSource={employeesData}
        columns={columns}
        rowKey='key'
        pagination={isMediumUp ? { size: "default", pageSize: 9 } : false}
      />

      <Modal
        title='Add Employee'
        open={isAddModalVisible}
        onOk={handleAddEmployee}
        onCancel={handleCloseModal}
      >
        <Form form={form} layout='vertical'>
          <Form.Item
            label='Name'
            name='name'
            rules={[
              { required: true, message: "Please input the employee's name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              { required: true, message: "Please input the employee's email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Department'
            name='departmentId'
            rules={[{ required: true, message: "Please select a department!" }]}
          >
            <Select
              placeholder='Select a department'
              options={departments.map((department) => ({
                value: department.id,
                label: department.name,
              }))}
            />
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  );
});

////// STYLES //////

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px;
`;

const TableHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  ${mediumUp} {
    flex-direction: row;
  }
`;

const FilterSearchInput = styled(Input)`
  && {
    width: 250px;
  }
`;

const DepartmentSelect = styled(Select)`
  && {
    width: 250px;
  }
`;
