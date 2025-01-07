import { observer } from "mobx-react-lite";
import { useAppContext } from "../../../hooks/useAppContext";
import { Button, Modal, Table, Form, Input, Select } from "antd";
import { useState } from "react";

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
        },
      },
    },
  } = useAppContext();

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleDeleteClick = (employeeId: string) => {
    const employee = employeesById[employeeId];
    Modal.confirm({
      title: `Are you sure you want to delete this employee?`,
      content: `Employee Name: ${employee.name}`,
      onOk: () =>
        companyController.deleteEmployee(employeeId, selectedCompanyId),
    });
  };

  const handleAddEmployee = async () => {
    try {
      const values = await form.validateFields();
      console.log({ values });
      companyController.addEmployee(values, selectedCompanyId);
      handleCloseModal();
    } catch (error) {
      console.error("Validation Failed:", error);
    }
  };

  const handleCloseModal = () => {
    setIsAddModalVisible(false);
    form.resetFields();
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
          Delete Employee
        </Button>
      ),
    },
  ];

  const employeesData = employees.map((employee) => ({
    key: employee.id,
    name: employee.name,
    email: employee.email,
    departmentId: employee.departmentId,
  }));

  return (
    <div>
      <div style={styles.header}>
        <Button type='primary' onClick={() => setIsAddModalVisible(true)}>
          Add Employee
        </Button>
      </div>

      <Table
        dataSource={employeesData}
        columns={columns}
        rowKey='key'
        style={{ marginTop: 16 }}
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
    </div>
  );
});

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 16,
  },
};
