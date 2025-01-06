import { useContext } from "react";
import { appContext } from "../context/appContext";

export const useAppContext = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};
