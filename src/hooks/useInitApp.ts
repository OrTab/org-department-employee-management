import { useEffect } from 'react';
import { useAppContext } from './useAppContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';

export const useInitApp = () => {
  const {
    rootController,
    rootStore: {
      companyStore: {
        selectedCompanyId,
        companies,
        setSelectedCompanyId,
        isLoaded,
      },
    },
  } = useAppContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const paths = pathname.split('/').filter(Boolean);
  const companyId = paths[1];

  useEffect(() => {
    rootController.loadAppData();
  }, [rootController]);

  // if selectedCompanyId is not set, set it to param value the first company id
  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    if (!selectedCompanyId) {
      let _companyId = companyId;
      if (!companyId || !companies[companyId]) {
        _companyId = Object.keys(companies)[0];
      }
      setSelectedCompanyId(_companyId);
    }
  }, [
    paths,
    selectedCompanyId,
    companyId,
    companies,
    setSelectedCompanyId,
    isLoaded,
  ]);

  useEffect(() => {
    if (!selectedCompanyId) {
      return;
    }

    const path = paths[paths.length - 1];
    const route =
      ROUTES.find((route) => route.key === path)?.key || 'departments';
    navigate(`company/${selectedCompanyId}/${route}`);
    // no need paths in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, selectedCompanyId]);
};
