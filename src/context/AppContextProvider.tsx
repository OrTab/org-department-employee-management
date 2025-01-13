import { useMemo } from 'react';
import { appContext } from './appContext';
import { RootStore } from '../store/RootStore';
import { RootController } from '../controllers/RootController';

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const rootStore = useMemo(() => new RootStore(), []);
  const rootController = useMemo(
    () => new RootController(rootStore),
    [rootStore]
  );
  const value = useMemo(
    () => ({ rootStore, rootController }),
    [rootStore, rootController]
  );

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};
