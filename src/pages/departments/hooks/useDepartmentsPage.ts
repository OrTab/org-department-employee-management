import { useCallback, useState } from "react";
import { useAppContext } from "../../../hooks/useAppContext";
import { message, Modal } from "antd";

export const useDepartmentsPage = () => {
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
    if (!selectedDepartmentId) {
      return;
    }
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

  const onConfirmAction = useCallback(() => {
    if (actionForEmployees === "delete") {
      handleDeleteEmployees();
    } else if (actionForEmployees === "move" && targetDepartment) {
      handleMoveEmployees();
    }
  }, [
    actionForEmployees,
    handleDeleteEmployees,
    handleMoveEmployees,
    targetDepartment,
  ]);

  const handleDeleteClick = useCallback(
    (departmentId: string) => {
      const department = selectedCompany.departmentsById[departmentId];
      if (department.employees.length > 0) {
        setSelectedDepartmentId(departmentId);
      } else {
        showDeleteConfirmation(departmentId);
      }
    },
    [selectedCompany.departmentsById, showDeleteConfirmation]
  );

  const selectedDepartment = selectedDepartmentId
    ? selectedCompany.departmentsById[selectedDepartmentId]
    : undefined;

  return {
    selectedDepartment,
    loading,
    handleDeleteClick,
    onConfirmAction,
    handleClose,
    selectedDepartmentId,
    actionForEmployees,
    targetDepartment,
    departments,
    setActionForEmployees,
    setTargetDepartment,
  };
};
