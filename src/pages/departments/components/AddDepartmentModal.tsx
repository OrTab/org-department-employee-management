import { Modal, Form, Input, Checkbox, FormInstance } from 'antd';
import { observer } from 'mobx-react-lite';

type Props = {
  isOpen: boolean;
  onAddDepartment: () => void;
  onCancel: () => void;
  form: FormInstance;
};

export const AddDepartmentModal = observer(
  ({ isOpen, onAddDepartment, onCancel, form }: Props) => {
    return (
      <Modal
        title="Add Department"
        open={isOpen}
        onOk={onAddDepartment}
        onCancel={onCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Department Name"
            rules={[
              { required: true, message: 'Please input the department name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="addDummyEmployees" valuePropName="checked">
            <Checkbox>Add dummy employees</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
);
