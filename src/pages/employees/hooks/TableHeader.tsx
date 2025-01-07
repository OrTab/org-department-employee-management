import styled from "styled-components";
import { mediumUp } from "../../../style/breakpoints";
import { Button, Input, Select } from "antd";
import { Department } from "../../../store/entities/Department";

type Props = {
  setSearchText: (value: string) => void;
  selectedDepartments: string[];
  setSelectedDepartments: (value: string[]) => void;
  departments: Department[];
  setIsAddModalVisible: (value: boolean) => void;
};

export const TableHeader = ({
  setSearchText,
  selectedDepartments,
  setSelectedDepartments,
  departments,
  setIsAddModalVisible,
}: Props) => {
  return (
    <Container>
      <FilterSearchInput
        placeholder='Search employees by name or email'
        onChange={(e) => setSearchText(e.target.value)}
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
    </Container>
  );
};

///// STYLES /////

const Container = styled.div`
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
