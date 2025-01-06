import { useEffect, useRef } from "react";
import { useAppContext } from "./useAppContext";
import { useNavigate } from "react-router-dom";

export const useInitApp = () => {
  const {
    rootController,
    rootStore: {
      companyStore: { selectedCompanyId },
    },
  } = useAppContext();
  const isNavigatesToCompany = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    rootController.loadAppData();
  }, [rootController]);

  useEffect(() => {
    if (isNavigatesToCompany.current || !selectedCompanyId) {
      return;
    }
    isNavigatesToCompany.current = true;
    navigate(`company/${selectedCompanyId}/departments`);
  }, [selectedCompanyId, navigate]);
};
