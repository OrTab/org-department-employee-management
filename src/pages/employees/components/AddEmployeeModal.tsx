import { Form, FormInstance, Input, Modal, Select } from "antd";
import { Department } from "../../../store/entities/Department";

type Props = {
  isAddModalVisible: boolean;
  handleAddEmployee: () => void;
  handleCloseModal: () => void;
  form: FormInstance;
  departments: Department[];
};

export const AddEmployeeModal = ({
  isAddModalVisible,
  handleAddEmployee,
  handleCloseModal,
  form,
  departments,
}: Props) => {
  return (
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
  );
};
