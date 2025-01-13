import { Modal, Select } from 'antd';
import styled from 'styled-components';
import { Department } from '../../../store/entities/Department';

type Props = {
  isOpen: boolean;
  loading: boolean;
  actionForEmployees: 'delete' | 'move' | null;
  targetDepartment: string | null;
  departments: Department[];
  selectedDepartmentId: string | null;
  onActionChange: (value: 'delete' | 'move') => void;
  onTargetDepartmentChange: (value: string) => void;
  onOk: () => void;
  onCancel: () => void;
};

export const DepartmentActionModal = ({
  isOpen,
  loading,
  actionForEmployees,
  targetDepartment,
  departments,
  selectedDepartmentId,
  onActionChange,
  onTargetDepartmentChange,
  onOk,
  onCancel,
}: Props) => {
  return (
    <Modal
      title="Manage Employees Before Deleting Department"
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={loading}
    >
      <p>This department has employees. What would you like to do?</p>
      <FullWidthSelect
        placeholder="Select action for employees"
        value={actionForEmployees}
        onChange={(value) => onActionChange(value as 'delete' | 'move')}
      >
        <Select.Option value="delete">Delete all employees</Select.Option>
        <Select.Option value="move">
          Move employees to another department
        </Select.Option>
      </FullWidthSelect>

      {actionForEmployees === 'move' && (
        <FullWidthSelect
          placeholder="Select target department"
          value={targetDepartment}
          onChange={(value) => onTargetDepartmentChange(value as string)}
          options={departments
            .filter((department) => department.id !== selectedDepartmentId)
            .map((department) => ({
              value: department.id,
              label: department.name,
            }))}
        />
      )}
    </Modal>
  );
};

const FullWidthSelect = styled(Select)`
  && {
    width: 100%;
  }
`;
