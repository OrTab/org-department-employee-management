import { createContext } from 'react';
import type { RootStore } from '../store/RootStore';
import { RootController } from '../controllers/RootController';

export type AppContextValue = {
  rootStore: RootStore;
  rootController: RootController;
};

export const appContext = createContext<AppContextValue>(
  null as unknown as AppContextValue
);
